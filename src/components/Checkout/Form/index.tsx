import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import {  
    Title, 
    Headline, 
    FormContainer, 
    FormTitle, 
    GroupForm,
    BaseInput, 
    CepInput,
    NumberInput,
    ComplementInput,
    DistrictInput,
    CityInput,
    UfInput,
    PaymentSection,
    PaymentOption,
    ClipLoaderContainer,
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { useFormContext } from "react-hook-form";
import { NewCheckoutFormData } from "../../../pages/Checkout";
import { FormContext } from "../../../context/FormCartContext";

export function FormCheckout() {
    const { addToFormCheckout, formCheckout } = useContext(FormContext)

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [initialData, setInitialData] = useState<NewCheckoutFormData | null>(null);
    const { register, handleSubmit, setValue, watch } = useFormContext<NewCheckoutFormData>();

    const watchedData = watch();    

    useEffect(() => {
        if (formCheckout && formCheckout.length > 0) {
            const checkoutFormData = formCheckout[0];

            setValue('cep', checkoutFormData.cep || "");
            setValue('street', checkoutFormData.street || "");
            setValue('number', checkoutFormData.number || "");
            setValue('complement', checkoutFormData.complement || "");
            setValue('district', checkoutFormData.district || "");
            setValue('city', checkoutFormData.city || "");
            setValue('uf', checkoutFormData.uf || "");
            setValue('payment', checkoutFormData.payment || "");

            setInitialData(checkoutFormData);
        }
    }, [formCheckout, setValue]);

    const isDataChanged = initialData && JSON.stringify(watchedData) !== JSON.stringify(initialData);

    async function getAddress(cep: string) {
        try {
            setError(null);
            setLoading(true);

            const cepRegex = /^\d{5}-?\d{3}$/;

            if (!cepRegex.test(cep)) {
                resetFields();
                setError('CEP inválido!');
                return;
            }

            if (cep.length < 8) {
                resetFields();
                return;
            }

            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            if (data.erro) {
                setError('CEP não encontrado');
                setLoading(false);
                resetFields();
                return;
            }

            if (data.logradouro !== undefined) {
                setValue('street', data.logradouro || "");
            }

            if (data.bairro !== undefined) {
                setValue('district', data.bairro || "");
            }

            if (data.localidade !== undefined) {
                setValue('city', data.localidade || "");
            }

            if (data.uf !== undefined) {
                setValue('uf', data.uf || "");
            }            
        } catch (err) {
            setError('Ocorreu um erro ao buscar o CEP.');
            console.error('Error:',
                err
            );
        } finally {
            setLoading(false);

            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }        
    }

    function handleCepChange (e: React.ChangeEvent<HTMLInputElement>) {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length <= 5) {
            value = value.replace(/(\d{5})(\d{0,1})/, "$1-$2");
        } else {
            value = value.replace(/(\d{5})(\d{0,3})/, "$1-$2");
        }

        setValue("cep", value); 
    }

    async function handleCreateOrder(data: NewCheckoutFormData) {    
        setLoading(true);    

        await new Promise((resolve) => setTimeout(resolve, 1000));

        addToFormCheckout(data);
        setLoading(false);
    }

    function resetFields() {
        setValue('street', '');
        setValue('district', '');
        setValue('city', '');
        setValue('uf', '');
    }

    return (
        <>
            <FormTitle>Complete seu pedido</FormTitle>
            <FormContainer onSubmit={handleSubmit(handleCreateOrder)}>  
                <fieldset>
                    <Headline>
                        <Title>
                            <MapPinLine id="localization" size={22} weight="bold" />
                            <h2>Endereço de Entrega</h2>
                        </Title>                        
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </Headline>

                    <div>
                        <CepInput 
                            {...register("cep")} 
                            type="text" 
                            id="cep" 
                            placeholder="CEP" 
                            onBlur={(e) => getAddress(e.target.value)}
                            onChange={(e) => handleCepChange(e)}
                        />
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div>
                        <BaseInput {...register("street")} type="text" id="street" placeholder="Rua"/>                        
                    </div>
                    <GroupForm data-optional={'optional'}>
                        <NumberInput {...register("number")} type="text" id="number" placeholder="Número" />
                        <ComplementInput {...register("complement")}type="text" id="complement" placeholder="Complemento"/>
                    </GroupForm>
                    <GroupForm>
                        <DistrictInput {...register("district")} type="text" id="district" placeholder="Bairro" />                        
                        <CityInput {...register("city")} type="text" id="city" placeholder="Cidade" />                        
                        <UfInput {...register("uf")} type="text" id="uf" placeholder="UF" />
                    </GroupForm>

                    {loading && (
                        <ClipLoaderContainer>
                            <ClipLoader color="#000" size={50} />
                        </ClipLoaderContainer>
                    )}
                </fieldset>
                <fieldset>
                    <Headline>
                        <Title>
                            <CurrencyDollar size={22} />
                            <h2>Pagamento</h2>
                        </Title>                        
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    </Headline>
                    <div>
                        <PaymentSection>
                            <PaymentOption>
                                <input {...register("payment")} type="radio" id="credit-card" value="credit-card" />                                 
                                <label htmlFor="credit-card">
                                    <CreditCard size={16} /> Cartão de Crédito
                                </label>
                            </PaymentOption>
                            <PaymentOption>
                                <input {...register("payment")} type="radio" id="debit-card" value="debit-card" />                                
                                <label htmlFor="debit-card">
                                    <Bank size={16} /> Cartão de Débito
                                </label>
                            </PaymentOption>
                            <PaymentOption>
                                <input {...register("payment")} type="radio" id="money" value="money" />
                                <label htmlFor="money">
                                    <Money size={16} /> Dinheiro
                                </label>
                            </PaymentOption>
                        </PaymentSection>
                    </div>
                </fieldset>
                <div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Salvando...' : isDataChanged ? 'Atualizar Dados' : formCheckout.length > 0 ? 'Dados Salvos' : 'Salvar Dados'}
                    </button>
                </div>
            </FormContainer>
        </>
    )
}