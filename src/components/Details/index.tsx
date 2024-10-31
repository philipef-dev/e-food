import logoEfood from '../../assets/images/logoE-food.svg';
import fundoCard from '../../assets/images/pizzaImg.png';
import { Container } from '../../styles/global';
import Footer from '../Footer';
import { BannerDetails, CardDetails, HeaderDetails, SectionCardsDetails } from './styles';

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
        <Container>
            <SectionCardsDetails>
                <CardDetails>
                    <div> <img src={fundoCard} alt="Imagem Pizza" /> </div>
                    <h3>Pizza Marguerita</h3>
                    <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                    <a href="#">Adicionar ao carrinho</a>
                </CardDetails>
                <CardDetails>
                    <div> <img src={fundoCard} alt="Imagem Pizza" /> </div>
                    <h3>Pizza Marguerita</h3>
                    <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                    <a href="#">Adicionar ao carrinho</a>
                </CardDetails>
                <CardDetails>
                    <div> <img src={fundoCard} alt="Imagem Pizza" /> </div>
                    <h3>Pizza Marguerita</h3>
                    <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                    <a href="#">Adicionar ao carrinho</a>
                </CardDetails>
                <CardDetails>
                    <div> <img src={fundoCard} alt="Imagem Pizza" /> </div>
                    <h3>Pizza Marguerita</h3>
                    <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                    <a href="#">Adicionar ao carrinho</a>
                </CardDetails>
                <CardDetails>
                    <div> <img src={fundoCard} alt="Imagem Pizza" /> </div>
                    <h3>Pizza Marguerita</h3>
                    <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                    <a href="#">Adicionar ao carrinho</a>
                </CardDetails>
                <CardDetails>
                    <div> <img src={fundoCard} alt="Imagem Pizza" /> </div>
                    <h3>Pizza Marguerita</h3>
                    <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                    <a href="#">Adicionar ao carrinho</a>
                </CardDetails>
            </SectionCardsDetails>
        </Container>
        <Footer />
    </>
)

export default RestaurantDetails