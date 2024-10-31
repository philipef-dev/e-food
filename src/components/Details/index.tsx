import logoEfood from '../../assets/images/logoE-food.svg';
import { HeaderDetails } from './styles';

const RestaurantDetails = () => (
    <HeaderDetails>
        <h2>Restaurantes</h2>
        <div>
            <img src={logoEfood} alt="" />
        </div>
        <h2> 0 produtos(s) no carrinho</h2>
    </HeaderDetails>
)

export default RestaurantDetails