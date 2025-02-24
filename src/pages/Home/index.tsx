import { CoffeeList } from './components/CoffeeList';
import { HeroSection } from './components/Hero';

export function Home() {
    return (
        <div>
            <HeroSection />
            <CoffeeList />
        </div>
    )
}