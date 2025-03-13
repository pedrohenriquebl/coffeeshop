import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Minus, Plus, Trash } from "phosphor-react";
import { 
    CheckoutContainer, 
    CheckoutFormContainer, 
    CheckoutProductContainer, 
    CheckoutSummaryContainer, 
    CheckoutProductList,
    ProductActions,
    Actions,
    ProductPrice,
    SubtotalContainer 
} from "./styles";

interface CartItems {
    id: number;
    qty: number;
    price: number;
    title: string;
    url: string;
}

export function Checkout() {
const { cart, getProductTotal, increaseQty, decreaseQty, removeItemFromCart, getCartTotal } = useContext(CartContext);    

    return (
        <CheckoutContainer>
            <CheckoutFormContainer>
                <h2>Complete seu pedido</h2>
                <form>

                </form>
            </CheckoutFormContainer>
            <CheckoutSummaryContainer>
                <h2>Cafés selecionados</h2>
                <CheckoutProductContainer>
                    {cart.map((item: CartItems) => {
                        return (
                            <>
                                <CheckoutProductList key={item.id}>
                                    <div>
                                        <img src={`${item.url}`} alt={item.title}/>
                                    </div>
                                    <ProductActions>
                                        <h3>{item.title}</h3>
                                        <Actions>
                                            <section>
                                                <button><Plus size={14} onClick={() => increaseQty(item.id)}/></button>
                                                <span>{item.qty}</span>
                                                <button><Minus size={14} onClick={() => decreaseQty(item.id)}/></button>
                                            </section>
                                            <section>
                                                <button onClick={() => removeItemFromCart(item.id)}><Trash size={16} />Remover</button>
                                            </section>
                                        </Actions>
                                    </ProductActions>
                                    <ProductPrice>R${getProductTotal(item.id).toFixed(2)}</ProductPrice>
                                </CheckoutProductList>
                                <hr></hr>
                            </>
                        );
                    })}
                </CheckoutProductContainer>
                <SubtotalContainer>
                    <ul>
                        <li>
                            <span>Total de itens</span>
                            <span>R$ {getCartTotal().toFixed(2)}</span>
                        </li>
                        <li>
                            <span>Entrega</span>
                            <span>Gratuita</span>
                        </li>
                        <li>
                            <span>Total</span>
                            <span>R$ {getCartTotal().toFixed(2)}</span>
                        </li>
                    </ul>
                    <button>Confimar Pedido</button>
                </SubtotalContainer>
            </CheckoutSummaryContainer>
        </CheckoutContainer>
    )
}