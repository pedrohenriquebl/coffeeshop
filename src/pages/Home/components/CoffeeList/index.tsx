import { Card } from "../Card"
import { ListContainer, Title } from "./styles"
import { CoffeeDatabase } from "../../../../database"

interface CoffeeProps {
    id: number
    url: string;
    title: string;
    tag: { type: string } | { type: string }[]
    description: string;
    price: number;
}

export function CoffeeList () {
    return (
        <>
            <Title>Nossos Cafés</Title>
            <ListContainer>            
                {CoffeeDatabase.map((coffee: CoffeeProps) => {
                    return (
                        <Card
                            id={coffee.id} 
                            key={coffee.id}
                            url={coffee.url}
                            title={coffee.title}
                            tag={coffee.tag}
                            description={coffee.description}
                            price={coffee.price} 

                        />
                    )
                })}                
            </ListContainer>            
        </>        
    )
}