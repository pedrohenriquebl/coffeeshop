import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import { CardContainer, Tag, Title, Description, Actions, ActionQty, CartButton } from "./styles";
import { ShoppingCart, Plus, Minus } from 'phosphor-react';

interface CoffeeProps {
    id: number
    url: string;
    title: string;
    tag: { type: string } | { type: string }[]
    description: string;
    price: number;
}

export function Card({ id, url, title, tag, description, price }: CoffeeProps) {
    const { cart, setCart, handleUpdateProductQty } = useContext(CartContext);

    console.log('cart', cart);

    return (
        <>
            <CardContainer >
                <img src={`${url}`} alt="Café"/>                
                <Tag>
                    {
                        Array.isArray(tag) 
                            ? tag.map((item, index) => {
                                return <span key={index}>{item.type}</span>
                            })
                            : <span>{tag.type}</span>
                    }
                </Tag>
                <Title>
                    {title.toUpperCase()}
                </Title>
                <Description>{description}</Description>
                <Actions>
                    <span>R$ <strong>{price.toFixed(2)}</strong></span>
                    <ActionQty>
                        <button><Minus size={14} onClick={() => handleUpdateProductQty(id, -1, price, title)}/></button>
                        <span>1</span>
                        <button><Plus size={14} onClick={() => handleUpdateProductQty(id, +1, price, title)}/></button>                        
                    </ActionQty>     
                    <CartButton><ShoppingCart size={24}/></CartButton>             
                </Actions>
            </CardContainer>
        </>
    )
}