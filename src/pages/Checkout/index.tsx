import { useContext } from "react";
import { Summary } from "../../components/Checkout";
import { 
    CheckoutContainer, 
    CheckoutFormContainer
} from "./styles";
import { CartContext } from "../../context/CartContext";

export function Checkout() {
    const { cart } = useContext(CartContext);  


    return (
        <CheckoutContainer>

            {cart.length === 0 ?(<h2>Seu carrinho está vazio</h2>) : (
                <>
                    <CheckoutFormContainer>
                        <h2>Complete seu pedido</h2>
                        <form>

                        </form>
                    </CheckoutFormContainer>
                    <Summary /> 
                </>
            )}
                       
        </CheckoutContainer>
    )
}