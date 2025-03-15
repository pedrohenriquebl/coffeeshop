import { useContext } from "react";
import { Summary } from "../../components/Checkout/Summary";
import { 
    CheckoutContainer, 
    CheckoutFormContainer
} from "./styles";
import { CartContext } from "../../context/CartContext";
import { FormCheckout } from "../../components/Checkout/Form";

export function Checkout() {
    const { cart } = useContext(CartContext);  


    return (
        <CheckoutContainer>
            {cart.length === 0 ?(<h2>Seu carrinho está vazio</h2>) : (
                <>
                    <CheckoutFormContainer>                        
                        <FormCheckout />
                    </CheckoutFormContainer>
                    <Summary /> 
                </>
            )}                       
        </CheckoutContainer>
    )
}