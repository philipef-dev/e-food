import Footer from "../Footer"
import {
    Card,
    BackroundImgCard,
    MainCard, HeaderCard,
    RestaurantsHeader,
    RestaurantsSection,
} from "./styles"
import logoEfood from '../../assets/images/logoE-food.svg'
import { BtnDefault, Container } from "../../styles/global"
import { RestaurantsProps } from "../../pages/Home"
import starImg from '../../assets/images/star.svg'

type Props = {
    restaurants: RestaurantsProps[]
}

const Restaurants = ({ restaurants }: Props) => {
    return (
        <>
            <RestaurantsHeader>
                <img src={logoEfood} alt="Logo e-food" />
                <h1>
                    Viva experiências gastronômicas <br /> no conforto da sua casa
                </h1>
            </RestaurantsHeader>
            <Container>
                <RestaurantsSection>
                    {restaurants.map((restaurant) => (
                        <Card key={restaurant.id}>
                            <BackroundImgCard style={{ backgroundImage: `url(${restaurant.capa})` }}>
                                {/* <span>Destaque da semana</span> */}
                                <span>{restaurant.tipo}</span>
                            </BackroundImgCard>

                            <MainCard>
                                <HeaderCard>
                                    <h3>{restaurant.titulo}</h3>
                                    <div>
                                        <p>{restaurant.avaliacao}</p>

                                        <img src={starImg} alt="" />
                                    </div>
                                </HeaderCard>
                                <p>
                                    {restaurant.descricao}
                                </p>
                                <BtnDefault type="link"
                                    to={`restaurants_details/${restaurant.id}`}>
                                    Saiba mais
                                </BtnDefault>
                            </MainCard>
                        </Card>
                    ))}
                </RestaurantsSection>
            </Container>
            <Footer />
        </>
    )
}

export default Restaurants