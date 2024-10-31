import logoEfood from '../../assets/images/logoE-food.svg';
import { BannerDetails, HeaderDetails } from './styles';

const RestaurantDetails = () => (
    <>
        <HeaderDetails>
            <h2>Restaurantes</h2>
            <div>
                <img src={logoEfood} alt="" />
            </div>
            <h2> 0 produtos(s) no carrinho</h2>
        </HeaderDetails>
        <BannerDetails>
            <p>Italiana</p>
            <h2>La Dolce Vita Trattoria</h2>
        </BannerDetails>
    </>
)

export default RestaurantDetails