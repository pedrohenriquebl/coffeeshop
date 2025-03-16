import { useEffect, useState } from "react"

interface CartItems {
    cartId: string,
    status: boolean,
    items: {
        id: number, 
        qty: number,
        price: number,
        title: string,
        url: string,
    }[]
}

interface CartItemsProps {
    id: number;
    qty: number;
    price: number;
    title: string;
}

export function Success() {
    const [completedCart, setCompletedCart] = useState<CartItems[] | null>(null);

    useEffect(() => {
        const completedCart = localStorage.getItem('@completedCart');
        if (completedCart) {
            setCompletedCart(JSON.parse(completedCart));
        }
    }, []);

    return (
        <div>
            <h1>Success Page</h1>

            {completedCart ? (
                <>
                    <p>Thank you for your purchase!</p>
                    {completedCart.map((cartItem: CartItems) => (
                        cartItem.items.map((item: CartItemsProps) => (
                            <div key={item.id}>
                                <h3>{item.title}</h3>
                                <p>Quantity: {item.qty}</p>
                                <p>Price: R$ {item.price.toFixed(2)}</p>
                            </div>
                        ))
                    ))}
                </>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    )
}