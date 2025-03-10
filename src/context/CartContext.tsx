import { createContext, ReactNode, useState } from 'react';

interface CartContextProviderProps {
    children: ReactNode;
}

interface CartContextType {
    cart: { 
        id: number, 
        qty: number,
        price: number,
        title: string, 
    }[];
    setCart: React.Dispatch<React.SetStateAction<any>>;
    addToCart: (id: number, qty: number, price: number, title: string) => void;
    getCartTotal: () => number;
    getProductTotal: (id: number) => number;
    getTotalProductsQty?: () => number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartContextProvider({ children }: CartContextProviderProps){
    const [cart, setCart] = useState<{ 
        id: number, 
        qty: number,
        price: number,
        title: string,
    }[]>([]);

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

    function addToCart(id: number, qty: number, price: number, title: string) {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === id ? { ...item, qty: item.qty + qty } : item
                );
            } else {
                return [...prevCart, { id, qty, price, title }];
            }

            /*const updatedCart = prevCart.map(item => {
                if (item.id === id) {
                    const newQty = item.qty + change;
                    if (newQty > 0) {
                        return { ...item, qty: newQty };
                    }

                    return null;
                }
                return item;
            }).filter(item => item !== null)    
            
            if (!updatedCart.some(item => item.id === id) && change > 0) {
                updatedCart.push({
                    id,
                    qty: 1,
                    price,
                    title,
                });
            }

            return updatedCart;*/
        });        
    }

    return (
        <CartContext.Provider value={{ 
            cart, 
            setCart, 
            addToCart,
            getProductTotal,
            getCartTotal,
            getTotalProductsQty 
        }}>
            {children}
        </CartContext.Provider>
    )
}