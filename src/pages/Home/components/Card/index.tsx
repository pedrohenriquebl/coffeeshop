import { useContext, useState } from "react";
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
    const [quantity, setQuantity] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    const { addToCart } = useContext(CartContext);

    const increaseQty = () => {
        setQuantity(quantity + 1);
    }    

    const decreaseQty = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handleAddToCart = () => {
        setIsLoading(true);

        addToCart(id, quantity, price, title, url);
        setQuantity(1);

        setTimeout(() => {
            setIsLoading(false);
            setIsAdded(true);
            setTimeout(() => setIsAdded(false), 1000);
        }, 1000);
    }

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
                    {isLoading ? (
                        <span></span>
                    ): isAdded ? (
                        <span></span>
                    ): (
                        <ActionQty>
                            <button><Minus size={14} onClick={decreaseQty}/></button>
                            <span>{quantity}</span>
                            <button><Plus size={14} onClick={increaseQty}/></button>                        
                        </ActionQty> 
                    )}

                    {isLoading ? (
                        <CartButton disabled>Adicionando...</CartButton>
                    ) : isAdded ? (
                        <CartButton disabled>Adicionado!</CartButton>
                    ): (
                        <CartButton onClick={handleAddToCart}><ShoppingCart size={24}/></CartButton>  
                    )}           
                </Actions>
            </CardContainer>
        </>
    )
}