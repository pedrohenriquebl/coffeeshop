import { CardContainer, Tag, Title, Description, Actions, ActionQty, CartButton } from "./styles";
import { ShoppingCart, Plus, Minus } from 'phosphor-react';

interface CoffeeProps {
    url: string;
    title: string;
    tag: { type: string } | { type: string }[]
    description: string;
    price: number;
}


export function Card({ url, title, tag, description, price }: CoffeeProps) {
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
                        <button><Minus size={14} /></button>
                        <span>1</span>
                        <button><Plus size={14} /></button>                        
                    </ActionQty>     
                    <CartButton><ShoppingCart size={24}/></CartButton>             
                </Actions>
            </CardContainer>
        </>
    )
}