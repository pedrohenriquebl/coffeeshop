import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { Headline, PaymentOption, PaymentSection, Title } from "./styles";
import { useFormContext } from "react-hook-form";
import { NewCheckoutFormData } from "../../../../pages/Checkout";


export function PaymentFields() {
    const { register } = useFormContext<NewCheckoutFormData>();

    return (
        <>
            <Headline>
                <Title>
                    <CurrencyDollar size={22} />
                    <h2>Pagamento</h2>
                </Title>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </Headline>
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
        </>
    );
}