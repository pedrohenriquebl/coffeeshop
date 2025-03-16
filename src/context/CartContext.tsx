import { createContext, ReactNode, useEffect, useState } from 'react';

interface CartContextProviderProps {
    children: ReactNode;
}

interface CartContextType {
    cart: { 
        id: number, 
        qty: number,
        price: number,
        title: string,
        url: string, 
    }[];
    setCart: React.Dispatch<React.SetStateAction<{ 
        id: number, 
        qty: number,
        price: number,
        title: string,
        url: string, 
    }[]>>;
    addToCart: (id: number, qty: number, price: number, title: string, url: string) => void;
    getCartTotal: () => number;
    getProductTotal: (id: number) => number;
    getTotalProductsQty: () => number;
    increaseQty: (id: number) => void;
    decreaseQty: (id: number) => void;
    removeItemFromCart: (id: number) => void;
}

const defaultCartContext: CartContextType = {
    cart: [],
    setCart: () => {},
    addToCart: () => {},
    getCartTotal: () => 0,
    getProductTotal: () => 0,
    getTotalProductsQty: () => 0,
    increaseQty: () => {},
    decreaseQty: () => {},
    removeItemFromCart: () => {},
}

export const CartContext = createContext<CartContextType>(defaultCartContext);

export function CartContextProvider({ children }: CartContextProviderProps){
    const [cart, setCart] = useState<{ 
        id: number, 
        qty: number,
        price: number,
        title: string,        
        url: string,
    }[]>([]);
    
    useEffect(() => {
        const storedCart = localStorage.getItem('@cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        if (cart.length > 0) {
            const stateJSON = JSON.stringify(cart);
            localStorage.setItem('@cart', stateJSON);
        }
    }, [cart]);

    function getProductTotal(id: number) {
        const product = cart.find(item => item.id === id);
        return product ? product.qty * product.price : 0;
    }

    function getCartTotal() {
        return cart.reduce((total, item) => total + item.price * item.qty, 0);
    }

    function getTotalProductsQty() {
        return cart.reduce((total, item) => total + item.qty, 0);
    }

    const removeItemFromCart = (id: number) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    const increaseQty = (id: number) => {
        setCart(prevCart => 
            prevCart.map(item => 
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        )
    }

    const decreaseQty = (id: number) => {
        setCart(prevCart => 
            prevCart.map(item => 
                item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
            )
        )
    }

    function addToCart(id: number, qty: number, price: number, title: string, url: string) {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === id ? { ...item, qty: item.qty + qty } : item
                );
            } else {
                return [...prevCart, { id, qty, price, title, url }];
            }
        });        
    }

    return (
        <CartContext.Provider value={{ 
            cart, 
            setCart, 
            addToCart,
            getProductTotal,
            getCartTotal,
            getTotalProductsQty,
            increaseQty,
            decreaseQty,
            removeItemFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}