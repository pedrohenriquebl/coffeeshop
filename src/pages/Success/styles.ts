import styled from "styled-components";
import SuccessImage from "/assets/success/success-page.png"

export const SuccessWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 940px) {
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url(${SuccessImage});
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            z-index: -1;
            opacity: 0.3;
        }
    }
`;

export const SuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
    height: 440px;    
`;

export const Title = styled.div`
    width: 100%;
    padding-bottom: 2.5rem;

    h1 {
        font-family: 'Baloo 2', sans-serif;
        color: ${props => props.theme['yellow-dark']};
    }

    p {
       color: ${props => props.theme['base-text']}; 
    }
`;

export const SuccessList = styled.div`
    ul {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        border: 1px solid ${props => props.theme['yellow']};
        padding: 2.5rem;
        list-style: none;
        border-top-left-radius: 12px;
        border-bottom-right-radius: 12px;
        border-top-right-radius: 32px;
        border-bottom-left-radius: 32px;

        @media screen and (max-width: 768px) {
            padding: 1.5rem;
        }

        li {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.625rem;

            svg {
                padding: 0.5rem;
                border-radius: 50%;
                color: ${props => props.theme['white']};
            }

            p {
                color: ${props => props.theme['base-text']};
            }
        }

        li:nth-child(1) {
            svg {
                background: ${props => props.theme['purple']};                
            }
        }

        li:nth-child(2) {
            svg {
                background: ${props => props.theme['yellow']};
            }
        }

        li:nth-child(3) {
            svg {
                background: ${props => props.theme['yellow-dark']};
            }
        }
    }
`;

export const ImageSuccess = styled.img`
    @media screen and (max-width: 940px) {
        display: none;        
    }
`;