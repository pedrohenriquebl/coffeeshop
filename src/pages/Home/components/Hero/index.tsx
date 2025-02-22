import HeroBanner from "../../../../assets/hero-banner.svg"
import CartIcon from "../../../../assets/home-icons/cart-icon.svg"
import PackageIcon from "../../../../assets/home-icons/package-icon.svg"
import TimerIcon from "../../../../assets/home-icons/timer-icon.svg"
import CoffeeIcon from "../../../../assets/home-icons/coffee-icon.svg"
import { HeroContainer, ImageHeroBanner, SectionInfo } from "./styles"

export function HeroSection() {
    return (
        <HeroContainer>
            <SectionInfo>
                <div>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
                </div>
                
                <ul>
                    <li>
                        <img src={CartIcon} alt=""/>
                        <span>Compra simples e segura</span>
                    </li>                    
                    <li>
                        <img src={TimerIcon} alt=""/> 
                        <span>Embalagem mantém o café intacto</span>                        
                    </li>
                    <li>
                        <img src={PackageIcon} alt=""/>
                        <span>Entrega rápida e rastreada</span>
                    </li>
                    <li>
                        <img src={CoffeeIcon} alt=""/>
                        <span>O café chega fresquinho até você</span>
                    </li>
                </ul>                
            </SectionInfo>
            <ImageHeroBanner src={HeroBanner}/>
        </HeroContainer>
    )
}