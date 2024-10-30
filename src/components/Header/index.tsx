import { HeaderHero, Titulo } from '../../components/Header/styles'
import logoEfood from '../../assets/images/logoE-food.svg'

const Header = () => (
    <HeaderHero> <img src={logoEfood} alt="Logo e-food" />
        <Titulo> Viva experiências gastronômicas <br /> no conforto da sua casa</Titulo>

    </HeaderHero >
)

export default Header

