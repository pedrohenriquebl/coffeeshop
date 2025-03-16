
import { ClipLoaderContainer, FormContainer, FormTitle } from "./styles";
import { ClipLoader } from "react-spinners";
import { useContext, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { NewCheckoutFormData } from "../../../pages/Checkout";
import { FormContext } from "../../../context/FormCartContext";
import { PaymentFields } from "./Payment";
import { AddressFields } from "./Address";
import { CaretDown } from "phosphor-react";

export function FormCheckout() {
    const { addToFormCheckout, formCheckout } = useContext(FormContext)
    const [loading, setLoading] = useState<boolean>(false);
    const [initialData, setInitialData] = useState<NewCheckoutFormData | null>(null);
    const { handleSubmit, setValue, watch } = useFormContext<NewCheckoutFormData>();

    const watchedData = watch();    

    useEffect(() => {
        if (formCheckout && formCheckout.length > 0) {
            const checkoutFormData = formCheckout[0];

            setValue('cep', checkoutFormData.cep || "");
            setValue('street', checkoutFormData.street || "");
            setValue('number', checkoutFormData.number || "");
            setValue('complement', checkoutFormData.complement || "");
            setValue('district', checkoutFormData.district || "");
            setValue('city', checkoutFormData.city || "");
            setValue('uf', checkoutFormData.uf || "");
            setValue('payment', checkoutFormData.payment || "");

            setInitialData(checkoutFormData);
        }
    }, [formCheckout, setValue]);

    const isDataChanged = initialData && JSON.stringify(watchedData) !== JSON.stringify(initialData);    

    async function handleCreateOrder(data: NewCheckoutFormData) {    
        setLoading(true);    

        await new Promise((resolve) => setTimeout(resolve, 1000));

        addToFormCheckout(data);
        setLoading(false);
    }

    const handleDropdown = () => {
        const formContainer = document.querySelector('form');
        formContainer?.classList.toggle('active');
    }

    return (
        <>
            <FormTitle>
                Complete seu pedido <CaretDown size={16} onClick={handleDropdown}/>
            </FormTitle>
            <FormContainer onSubmit={handleSubmit(handleCreateOrder)}> 
                <fieldset>
                    <AddressFields />
                </fieldset>
                {loading && (
                    <ClipLoaderContainer>
                        <ClipLoader color="#000" size={50} />
                    </ClipLoaderContainer>
                )}
                <fieldset>
                    <PaymentFields />
                </fieldset>
                <div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Salvando...' : isDataChanged ? 'Atualizar Dados' : formCheckout.length > 0 ? 'Dados Salvos' : 'Salvar Dados'}
                    </button>
                </div>
            </FormContainer>
        </>
    )
}