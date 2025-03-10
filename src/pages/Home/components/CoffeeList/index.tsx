import { Card } from "../Card"
import { ListContainer } from "./styles"
import { CoffeeDatabase } from "../../../../database"
import { useContext } from "react"
import { CartContext } from "../../../../context/CartContext"

export function CoffeeList () {
const { cart, getProductTotal } = useContext(CartContext)

    return (
        <>
            <h2>Nossos Cafés</h2>
            <ListContainer>            
                {CoffeeDatabase.map((coffee) => {
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
            <div>
                {cart.map((item: any) => {
                    return (
                        <div key={item.id}>
                            <h1>Title: {item.title}</h1>
                            <span>ID: {item.id}</span>
                            <span>Price: R${item.price.toFixed(2)}</span>
                            <span>Qty: {item.qty}</span>
                            <span>Total: R${getProductTotal(item.id).toFixed(2)}</span>
                        </div>
                    );
                })}
            </div>
        </>        
    )
}