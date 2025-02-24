import styled from "styled-components";
import HeroBanner from "/assets/hero-banner.svg"

export const HeroContainer = styled.section`
    display: flex;
    flex-direction: row;
    gap: 3.5rem;
    margin: 5.5rem 0;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const ImageHeroBanner = styled.img`
    width: 100%;
    max-width: 29.75rem;
    height: auto;
    object-fit: contain;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const SectionInfo = styled.section`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    justify-content: space-between;   

    @media screen and (max-width: 768px) {
        gap: 2rem;

        &::before {
            content: '';
            position: absolute;
            top: -100px;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url(${HeroBanner});
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            z-index: -1;
            opacity: 0.3;
        }
    }

    h1 {
        font-family: 'Baloo 2', sans-serif;
        font-size: 2.5rem;
        line-height: 1.3;
        font-weight: 900;
        margin-bottom: 1rem;

        color: ${props => props.theme['base-title']};

        @media screen and (max-width: 768px) {
            font-size: 2rem;
        }
    }   

    h2 {
        font-family: 'Roboto', sans-serif;
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 1.3;
        color: ${props => props.theme['base-subtitle']};

        @media screen and (max-width: 768px) {
            font-size: 1.25rem;
        }
    }

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        list-style: none;
        margin-top: 2rem;
        padding: 0;

        @media screen and (max-width: 768px) {
            grid-template-columns: 1fr;
        }

        li {
            display: flex;
            align-items: center;
            gap: 0.75rem;

            img {
                width: 24px;
                height: 24px;
            }

            span {
                min-width: 15.625rem;
                color: ${props => props.theme['base-text']};
            }
        }
    }
`