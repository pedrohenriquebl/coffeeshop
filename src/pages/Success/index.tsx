import { CurrencyDollarSimple, MapPin, Timer } from "phosphor-react";
import { useEffect, useState } from "react"
import { ImageSuccess, SuccessContainer, SuccessList, SuccessWrapper, Title } from "./styles";
import SuccessImage from "/assets/success/success-page.png"

interface DeliveryMethodProps {
    cep: string;
    city: string;
    district: string;
    number: string;
    street: string;
    uf: string;
    payment: string;
}

export function Success() {
    const [completedCart, setCompletedCart] = useState<DeliveryMethodProps[] | null>(null);

    useEffect(() => {
        const completedCart = localStorage.getItem('@formCheckout');
        if (completedCart) {
            setCompletedCart(JSON.parse(completedCart));
        }
    }, []);

    return (
        <SuccessWrapper>
            <SuccessContainer>
                <Title>
                    <h1>Uhu! Pedido confirmado</h1>
                    <p>Agora é só aguardar que logo o café chegará até você</p>            
                </Title>
                <SuccessList>
                    {completedCart ? (
                        <>                        
                            {completedCart.map((item: DeliveryMethodProps) => (
                                <ul key={item.cep}>
                                    <li>
                                        <MapPin size={32} />
                                        <p>
                                            Entrega em <strong>{`${item.street}, ${item.number}, ${item.city} - ${item.district}, ${item.uf}`}</strong>
                                        </p>
                                    </li>
                                    <li>
                                        <Timer size={32} />
                                        <p>Estimativa de entrega: 20 - 30 minutos</p>
                                    </li>
                                    <li>    
                                        <CurrencyDollarSimple size={32} />                                
                                        <p>Pagamento na entrega 
                                            <strong>
                                                {item.payment === 'debit-card' ? ' Cartão de débito' : item.payment === 'credit-card' ? ' Cartão de crédito' : ' Dinheiro'}
                                            </strong>
                                        </p>
                                    </li>
                                </ul>
                            ))}
                        </>
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                </SuccessList>            
            </SuccessContainer>
            <ImageSuccess src={SuccessImage} alt="Success Logo Page" />
        </SuccessWrapper>
    )
}