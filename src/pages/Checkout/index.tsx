import { useContext } from "react";
import { Summary } from "../../components/Checkout/Summary";
import { 
    CheckoutContainer, 
    CheckoutFormContainer
} from "./styles";
import { CartContext } from "../../context/CartContext";
import { FormCheckout } from "../../components/Checkout/Form";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';

const newCheckoutFormSchema = zod.object({
    cep: zod.string().nonempty({ message: 'CEP inválido' }),
    street: zod.string().nonempty({ message: 'Campo obrigatório' }),
    number: zod.string().nonempty({ message: 'Campo obrigatório' }),
    complement: zod.string().optional(),
    district: zod.string().nonempty({ message: 'Campo obrigatório' }),
    city: zod.string().nonempty({ message: 'Campo obrigatório' }),
    uf: zod.string().nonempty({ message: 'Campo obrigatório' }),
    payment: zod.enum(['credit-card', 'debit-card', 'money'], { message: 'Selecione um método de pagamento' })
});

export type NewCheckoutFormData = zod.infer<typeof newCheckoutFormSchema>;

export function Checkout() {
    const { cart } = useContext(CartContext);  
    const checkoutForm = useForm<NewCheckoutFormData>({
        resolver: zodResolver(newCheckoutFormSchema),
        defaultValues: {
            cep: '',
            street: '',
            number: '',
            complement: '',
            district: '',
            city: '',
            uf: '',
            payment: 'credit-card'
        }
    });

    return (
        <CheckoutContainer>
            {cart.length === 0 ?(<h2>Seu carrinho está vazio</h2>) : (
                <>
                    <FormProvider {...checkoutForm}>
                        <CheckoutFormContainer>                        
                            <FormCheckout />
                        </CheckoutFormContainer>
                        <Summary /> 
                    </FormProvider>
                </>
            )}                       
        </CheckoutContainer>
    )
}