import { createContext, ReactNode, useEffect, useState } from 'react';

interface FormContextProviderProps {
    children: ReactNode;
}

interface FormCartProps {
    cep: string;
    street: string;
    number: string;
    complement?: string;
    district: string;
    city: string;
    uf: string;
    payment: "credit-card" | "debit-card" | "money";
}

interface FormContext {
    formCheckout: FormCartProps[];
    setFormCheckout: React.Dispatch<React.SetStateAction<FormCartProps[]>>;
    addToFormCheckout: (data: FormCartProps) => void;
}

const defaultFormContext: FormContext = {
    formCheckout: [],
    setFormCheckout: () => {},
    addToFormCheckout: () => {}
}

export const FormContext = createContext<FormContext>(defaultFormContext);

export function FormCartContextProvider({ children }: FormContextProviderProps ) {
    const [formCheckout, setFormCheckout] = useState<FormCartProps[]>([]);

    useEffect(() => {
        const storedFormData = localStorage.getItem('@formCheckout');
        if (storedFormData) {
            setFormCheckout(JSON.parse(storedFormData));
        }
    }, []);

    useEffect(() => {
        if (formCheckout.length > 0) {
            const stateJSON = JSON.stringify(formCheckout);
            localStorage.setItem('@formCheckout', stateJSON);
        }
    }, [formCheckout]);

    function addToFormCheckout(data: FormCartProps) {
        if (data && data.cep) {
            return setFormCheckout([data]);
        }
    }

    return (
        <FormContext.Provider value={{
            formCheckout,
            setFormCheckout,
            addToFormCheckout
        }}>
            {children}
        </FormContext.Provider>
    );
}