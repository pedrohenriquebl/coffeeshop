import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Minus, Plus, Trash } from "phosphor-react";

interface CartItems {
    id: number;
    qty: number;
    price: number;
    title: string;
    url: string;
}

export function Checkout() {
const { cart, getProductTotal, increaseQty, decreaseQty } = useContext(CartContext);    

    return (
        <div>
            <h2>Cafés selecionados</h2>
            <ul>
                {cart.map((item: CartItems) => {
                    return (
                        <li key={item.id}>
                            <div>
                                <img src={`${item.url}`} alt={item.title}/>
                            </div>
                            <div>
                                <h3>Title: {item.title}</h3>
                                <div>
                                    <div>
                                        <button><Plus size={14} onClick={() => increaseQty(item.id)}/></button>
                                        <span>{item.qty}</span>
                                        <button><Minus size={14} onClick={() => decreaseQty(item.id)}/></button>
                                    </div>
                                    <button><Trash size={24} /></button>
                                </div>
                            </div>
                            <span>R${getProductTotal(item.id).toFixed(2)}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}