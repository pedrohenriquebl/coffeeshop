import { createContext, ReactNode, useEffect, useState } from 'react';
import { NavigateFunction } from 'react-router-dom';

interface CartContextProviderProps {
    children: ReactNode;
}

interface CartContextType {
    cart: { 
        cartId: string,
        status: boolean,
        items: {
            id: number, 
            qty: number,
            price: number,
            title: string,
            url: string,
        }[]
    }[];
    setCart: React.Dispatch<React.SetStateAction<{ 
        cartId: string,
        status: boolean,
        items: {
            id: number, 
            qty: number,
            price: number,
            title: string,
            url: string,
        }[]
    }[]>>;
    addToCart: (id: number, qty: number, price: number, title: string, url: string, status?: boolean) => void;
    getCartTotal: () => number;
    getProductTotal: (id: number) => number;
    getTotalProductsQty: () => number;
    increaseQty: (id: number) => void;
    decreaseQty: (id: number) => void;
    removeItemFromCart: (id: number) => void;
    finalizePurchase: (cartId: string, navigate: NavigateFunction) => void;
    clearCart: (cartId: string) => void;
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
    finalizePurchase: () => {},
    clearCart: () => {}
}

export const CartContext = createContext<CartContextType>(defaultCartContext);

export function CartContextProvider({ children }: CartContextProviderProps){
    const [cart, setCart] = useState<{ 
        cartId: string;
        status: boolean;
        items: { 
            id: number;
            qty: number;
            price: number;
            title: string;
            url: string;
        }[];
    }[]>([]);
    
    useEffect(() => {
        const storedCart = localStorage.getItem('@cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }

        const completedCart = localStorage.getItem('@completedCart');
        if (completedCart) {
            console.log('Completed Cart: ', JSON.parse(completedCart));
        }
    }, []);

    useEffect(() => {
        if (cart.length > 0) {
            const stateJSON = JSON.stringify(cart);
            localStorage.setItem('@cart', stateJSON);
        } else {
            localStorage.removeItem('@cart');
        }
    }, [cart]);

    function getProductTotal(id: number) {
        for (const cartItem of cart) {
            const product = cartItem.items.find(item => item.id === id);
            if (product) {
                return product.qty * product.price;
            }
        }

        return 0;
    }

    function getCartTotal() {
        return cart.reduce((total, cartItem) => total + cartItem.items.reduce((itemTotal, item) => itemTotal + item.price * item.qty, 0), 0);
    }

    function getTotalProductsQty() {
        return cart.reduce((total, cartItem) => total + cartItem.items.reduce((itemTotal, item) => itemTotal + item.qty, 0), 0);
    }

    const removeItemFromCart = (productId: number) => {
        setCart(prevCart => 
            prevCart.map(cart => 
                !cart.status ? {
                    ...cart,
                    items: cart.items.filter(item => item.id !== productId)
                } : cart
            )
        );
    };

    const increaseQty = (productId: number) => {
        setCart(prevCart => 
            prevCart.map(cart => 
                !cart.status ? {
                    ...cart,
                    items: cart.items.map(item => 
                        item.id === productId ? { 
                            ...item, 
                            qty: item.qty + 1 
                        } : item
                    )
                } : cart
            )
        );
    };

    const decreaseQty = (productId: number) => {
        setCart(prevCart => 
            prevCart.map(cart => 
                !cart.status ? {
                    ...cart,
                    items: cart.items.map(item => 
                        item.id === productId && item.qty > 1 ? { 
                            ...item, 
                            qty: item.qty - 1 
                        } : item
                    )
                } : cart
            )
        );
    };


    function addToCart(id: number, qty: number, price: number, title: string, url: string) {
        const existingCart = cart.find(cartOpen => !cartOpen.status); 

        if (existingCart) {
            setCart(prevCart => 
                prevCart.map(cartOpen => 
                    cartOpen.cartId === existingCart.cartId ? 
                    { 
                        ...cartOpen, 
                        items: [...cartOpen.items, { id, qty, price, title, url }] 
                    } : cartOpen
                )
            );
        } else {
            const newCartId = generateCartId();
            setCart(prevCart => [
                ...prevCart, 
                    { 
                        cartId: newCartId, 
                        status: false, 
                        items: [{ id, qty, price, title, url }] 
                    }
                ]
            );
        }     
    }

    const clearCart = (cartId: string) => {
        const existingCart = cart.find(cartOpen => cartOpen.cartId === cartId);

        if (existingCart) {
            setCart([]);
            localStorage.removeItem('@cart');
        }        
    };

    const finalizePurchase = (cartId: string, navigate: NavigateFunction) => {
        console.log('current cartId: ', cartId);
        setCart(prevCart => 
            prevCart.map(cart => {
                if (cart.cartId === cartId) {
                    return {
                        ...cart,
                        status: true,
                    };
                }
                return cart;
            })
        );
        
        addPurchaseToHistory();
        clearCart(cartId);
        navigate('/success');
    };

    const addPurchaseToHistory = () => {
        const completedCart = localStorage.getItem('@completedCart');
        const updatedCompletedCart = completedCart ? JSON.parse(completedCart) : [];

        updatedCompletedCart.push(...cart);
        localStorage.setItem('@completedCart', JSON.stringify(updatedCompletedCart));
    };
    
    const generateCartId = () => {
        return `cart_${Math.random().toString(36).substr(2, 9)}`;
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
            removeItemFromCart,
            finalizePurchase,
            clearCart            
        }}>
            {children}
        </CartContext.Provider>
    )
}