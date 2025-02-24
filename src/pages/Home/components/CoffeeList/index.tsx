import { Card } from "../Card"
import { ListContainer } from "./styles"
import { CoffeeDatabase } from "../../../../database"

export function CoffeeList () {
    return (
        <>
            <h2>Nossos Cafés</h2>
            <ListContainer>            
                {CoffeeDatabase.map((coffee) => {
                    return (
                        <Card 
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