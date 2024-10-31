import { BntDefault, Container } from "../../styles/global"
import start from '../../assets/images/star.svg'

import { Card, Description, Header, BackroundImgCard, RestauranteSection, Title, MainCard } from "./styles"

const Restaurants = () => (
    <Container>
        <RestauranteSection>
            <Card>
                <BackroundImgCard>
                    <BntDefault>Destaque da semana</BntDefault>
                    <BntDefault>Japonesa</BntDefault>
                </BackroundImgCard>

                <MainCard>
                    <Header>
                        <Title>Hioki Sushi</Title>
                        <div>
                            <p>4.9</p>
                            <img src={start} />
                        </div>
                    </Header>
                    <Description>
                        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!
                    </Description>
                    <BntDefault type="button">Saiba mais</BntDefault>
                </MainCard>
            </Card>

            <Card>
                <BackroundImgCard>
                    <BntDefault>Italiana</BntDefault>
                </BackroundImgCard>

                <MainCard>
                    <Header>
                        <Title>Hioki Sushi</Title>
                        <div>
                            <p>4.6</p>
                            <img src={start} />
                        </div>
                    </Header>
                    <Description>
                        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!
                    </Description>
                    <BntDefault type="button">Saiba mais</BntDefault>
                </MainCard>
            </Card>

            <Card>
                <BackroundImgCard>
                    <BntDefault>Italiana</BntDefault>
                </BackroundImgCard>

                <MainCard>
                    <Header>
                        <Title>Hioki Sushi</Title>
                        <div>
                            <p>4.6</p>
                            <img src={start} />
                        </div>
                    </Header>
                    <Description>
                        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!
                    </Description>
                    <BntDefault type="button">Saiba mais</BntDefault>
                </MainCard>
            </Card>

            <Card>
                <BackroundImgCard>
                    <BntDefault>Italiana</BntDefault>
                </BackroundImgCard>

                <MainCard>
                    <Header>
                        <Title>Hioki Sushi</Title>
                        <div>
                            <p>4.6</p>
                            <img src={start} />
                        </div>
                    </Header>
                    <Description>
                        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!
                    </Description>
                    <BntDefault type="button">Saiba mais</BntDefault>
                </MainCard>
            </Card>
        </RestauranteSection>
    </Container>
)

export default Restaurants