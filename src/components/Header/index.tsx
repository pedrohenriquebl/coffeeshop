import { NavLink } from "react-router-dom";

import { CartWrapper, HeaderContainer, LocationWrapper } from "./styles";
import CoffeeLogo from "../../assets/coffee_logo.svg"
import ShoppingCart from "../../assets/shopping-cart.svg"
import PinLogo from "../../assets/pin.svg"
import { CurrentLocation } from "./Location";

export function Header() {
    return (
        <HeaderContainer>
            <NavLink to="/">
                <img src={CoffeeLogo} alt="Coffee Delivery Logo"/>
            </NavLink>
            <section>
                <LocationWrapper>
                    <img src={PinLogo} alt="pin location icon"/>
                    <CurrentLocation />
                </LocationWrapper>
                <CartWrapper>
                    <NavLink to="/checkout">
                        <img src={ShoppingCart} alt="minicart icon"/>
                    </NavLink>
                </CartWrapper>
            </section>
        </HeaderContainer>
    )
}