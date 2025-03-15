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
} from "./styles";

export function FormCheckout() {
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
                        <CepInput type="text" id="cep" placeholder="CEP" />
                    </div>
                    <div>
                        <BaseInput type="text" id="street" placeholder="Rua"/>                        
                    </div>
                    <GroupForm>
                        <NumberInput type="text" id="number" placeholder="Número" />
                        <ComplementInput type="text" id="complement" placeholder="Complemento"/>
                    </GroupForm>
                    <GroupForm>
                        <DistrictInput type="text" id="district" placeholder="Bairro" />                        
                        <CityInput type="text" id="city" placeholder="Cidade" />                        
                        <UfInput type="text" id="uf" placeholder="UF" />
                    </GroupForm>
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