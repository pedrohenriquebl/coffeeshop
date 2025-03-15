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
import { useState } from "react";
import { ClipLoader } from "react-spinners";

export function FormCheckout() {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    async function getAddress(cep: string) {

        try {
            setError(null);
            setLoading(true);

            const cepRegex = /^\d{5}-?\d{3}$/;

            if (!cepRegex.test(cep)) {
                setError('CEP inválido!');
                return;
            }

            if (cep.length < 8) {
                return;
            }

            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            if (data.erro) {
                setError('CEP não encontrado');
                setLoading(false);
                return;
            }

            if (data.logradouro !== undefined) {
                document.getElementById('street')?.setAttribute('value', data.logradouro);
            }

            if (data.bairro !== undefined) {
                document.getElementById('district')?.setAttribute('value', data.bairro);
            }

            if (data.localidade !== undefined) {
                document.getElementById('city')?.setAttribute('value', data.localidade);
            }

            if (data.uf !== undefined) {
                document.getElementById('uf')?.setAttribute('value', data.uf);
            }

            setTimeout(() => {
                setLoading(false);
            }, 2000);
        } catch (err) {
            setError('Ocorreu um erro ao buscar o CEP.');
            console.error('Error:',
                err
            );

            setTimeout(() => {
                setLoading(false);
            }, 2000);
        } finally {
            setLoading(false);
        }
        
    }

    return (
        <>
            <FormTitle>Complete seu pedido</FormTitle>
            <FormContainer>  
                <fieldset>
                    <Headline>
                        <Title>
                            <MapPinLine id="localization" size={22} weight="bold" />
                            <h2>Endereço de Entrega</h2>
                        </Title>                        
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </Headline>

                    <div>
                        <CepInput type="text" id="cep" placeholder="CEP" onBlur={(e) => getAddress(e.target.value)}/>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div>
                        <BaseInput type="text" id="street" placeholder="Rua"/>                        
                    </div>
                    <GroupForm data-optional={'optional'}>
                        <NumberInput type="text" id="number" placeholder="Número" />
                        <ComplementInput type="text" id="complement" placeholder="Complemento"/>
                    </GroupForm>
                    <GroupForm>
                        <DistrictInput type="text" id="district" placeholder="Bairro" />                        
                        <CityInput type="text" id="city" placeholder="Cidade" />                        
                        <UfInput type="text" id="uf" placeholder="UF" />
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
                                <input type="radio" id="credit-card" name="payment" />                                 
                                <label htmlFor="credit-card">
                                 <CreditCard size={16} /> Cartão de Crédito
                                </label>
                            </PaymentOption>
                            <PaymentOption>
                                <input type="radio" id="debit-card" name="payment" />                                
                                <label htmlFor="debit-card">
                                    <Bank size={16} /> Cartão de Débito
                                </label>
                            </PaymentOption>
                            <PaymentOption>
                                <input type="radio" id="money" name="payment" />
                                <label htmlFor="money">
                                    <Money size={16} /> Dinheiro
                                </label>
                            </PaymentOption>
                        </PaymentSection>
                    </div>
                </fieldset>
                <div>
                    <button type="submit">
                        Salvar Dados
                    </button>
                </div>
            </FormContainer>
        </>
    )
}