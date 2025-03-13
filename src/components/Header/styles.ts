import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;

    section {
        display: flex;
        gap: 0.75rem;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
    }
`

export const LocationWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    border-radius: 8px;
    padding: 0.5rem;
    
    background: ${props => props.theme['purple-light']};

    img {
        width: 20px;
        height: 22px;
    }

    span {
        color: ${props => props.theme['purple-dark']};
    }
`

export const CartWrapper = styled.div`
    width: 38px;
    height: 38px;

    a {
        position: relative;
        display: inherit;
        text-decoration: none;

        &::after {
            content: attr(data-qty);
            position: relative;
            padding: 5px;
            font-size: 0.75rem;
            background: ${props => props.theme['yellow-dark']};
            color: ${props => props.theme['yellow-light']};
            font-weight: 500;
            border-radius: 50%;
            width: 15px;
            height: 15px;
            text-align: center;
            display: inline-block;
            top: -50px;
            left: 20px; 
        }
    }
    
    border-radius: 8px;
    padding: 0.5rem;

    background: ${props => props.theme['yellow-light']};

    img {
        width: 25px;
        height: 25px;
    }
`

export const CartQty = styled.span`
      
`