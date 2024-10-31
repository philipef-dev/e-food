import { Container } from "../../styles/global"
import start from '../../assets/images/star.svg'

import { Card, Header, BackroundImgCard, RestauranteSection, MainCard } from "./styles"

const Restaurants = () => (
    <Container>
        <RestauranteSection>
            <Card>
                <BackroundImgCard>
                    <span>Destaque da semana</span>
                    <span>Japonesa</span>
                </BackroundImgCard>

                <MainCard>
                    <Header>
                        <h3>Hioki Sushi</h3>
                        <div>
                            <p>4.9</p>
                            <img src={start} />
                        </div>
                    </Header>
                    <p>
                        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!
                    </p>                    
                    <a href="#"> Saiba mais </a>
                </MainCard>
            </Card>

            <Card>
                <BackroundImgCard>
                    <span>Italina</span>
                </BackroundImgCard>

                <MainCard>
                    <Header>
                        <h3>Hioki Sushi</h3>
                        <div>
                            <p>4.9</p>
                            <img src={start} />
                        </div>
                    </Header>
                    <p>
                        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!
                    </p>                    
                    <a href="#"> Saiba mais </a>
                </MainCard>
            </Card>

            <Card>
                <BackroundImgCard>
                    <span>Italina</span>
                </BackroundImgCard>

                <MainCard>
                    <Header>
                        <h3>Hioki Sushi</h3>
                        <div>
                            <p>4.9</p>
                            <img src={start} />
                        </div>
                    </Header>
                    <p>
                        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!
                    </p>                    
                    <a href="#"> Saiba mais </a>
                </MainCard>
            </Card>


            <Card>
                <BackroundImgCard>
                    <span>Italina</span>
                </BackroundImgCard>

                <MainCard>
                    <Header>
                        <h3>Hioki Sushi</h3>
                        <div>
                            <p>4.9</p>
                            <img src={start} />
                        </div>
                    </Header>
                    <p>
                        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!
                    </p>                    
                    <a href="#"> Saiba mais </a>
                </MainCard>
            </Card>
        </RestauranteSection>
    </Container>
)

export default Restaurants