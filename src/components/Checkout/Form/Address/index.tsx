import { MapPinLine } from "phosphor-react";
import { BaseInput, CepInput, CityInput, ClipLoaderContainer, ComplementInput, DistrictInput, GroupForm, Headline, NumberInput, Title, UfInput } from "./styles";
import { ClipLoader } from "react-spinners";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { NewCheckoutFormData } from "../../../../pages/Checkout";

export function AddressFields() {    
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const { register, setValue } = useFormContext<NewCheckoutFormData>();

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
    
    function resetFields() {
        setValue('street', '');
        setValue('district', '');
        setValue('city', '');
        setValue('uf', '');
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

    return (
        <>
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
        </>
    )
}