import { Link } from "react-router-dom"
import Footer from "../Footer"
import start from '../../assets/images/star.svg'
import {
    Card,
    BackroundImgCard,
    MainCard, HeaderCard,
    RestaurantsHeader,
    RestaurantsSection,
} from "./styles"
import logoEfood from '../../assets/images/logoE-food.svg'
import { Container } from "../../styles/global"

const Restaurants = () => {
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
                    <Card>
                        <BackroundImgCard>
                            <span>Destaque da semana</span>
                            <span>Japonesa</span>
                        </BackroundImgCard>

                        <MainCard>
                            <HeaderCard>
                                <h3>Hioki Sushi</h3>
                                <div>
                                    <p>4.9</p>
                                    <img src={start} />
                                </div>
                            </HeaderCard>
                            <p>
                                Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!
                            </p>
                            <Link
                                to="restaurants_details"
                            >
                                Saiba mais
                            </Link>
                        </MainCard>
                    </Card>

                    <Card>
                        <BackroundImgCard>
                            <span>Italiana</span>
                        </BackroundImgCard>

                        <MainCard>
                            <HeaderCard>
                                <h3>Hioki Sushi</h3>
                                <div>
                                    <p>4.9</p>
                                    <img src={start} />
                                </div>
                            </HeaderCard>
                            <p>
                                Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!
                            </p>
                            <Link to="restaurants_details"> Saiba mais </Link>
                        </MainCard>
                    </Card>

                    <Card>
                        <BackroundImgCard>
                            <span>Italina</span>
                        </BackroundImgCard>

                        <MainCard>
                            <HeaderCard>
                                <h3>Hioki Sushi</h3>
                                <div>
                                    <p>4.9</p>
                                    <img src={start} />
                                </div>
                            </HeaderCard>
                            <p>
                                Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!
                            </p>
                            <Link to="restaurants_details"> Saiba mais </Link>
                        </MainCard>
                    </Card>

                    <Card>
                        <BackroundImgCard>
                            <span>Italina</span>
                        </BackroundImgCard>

                        <MainCard>
                            <HeaderCard>
                                <h3>Hioki Sushi</h3>
                                <div>
                                    <p>4.9</p>
                                    <img src={start} />
                                </div>
                            </HeaderCard>
                            <p>
                                Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!
                            </p>
                            <Link to="restaurants_details"> Saiba mais </Link>
                        </MainCard>
                    </Card>
                </RestaurantsSection>


            </Container>
            <Footer />
        </>
    )
}



export default Restaurants