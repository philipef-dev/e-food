import logoEfood from '../../assets/images/logoE-food.svg';
import fundoCard from '../../assets/images/pizzaImg.png';
import { BtnDefault, Container } from '../../styles/global';
import Footer from '../Footer';
import { BannerDetails, CardDetails, HeaderDetails, SectionCardsDetails, StyledLink, Modal, ModalContent } from './styles';
import iconClose from '../../assets/images/btnClose.svg'
import pizzaModal from '../../assets/images/pizzaModal.png'
import { useState } from 'react';


const RestaurantDetails = () => {
    const [modal, setModal] = useState(false)

    return (
        <>
            <HeaderDetails>
                <StyledLink to={'/'}>Restaurantes</StyledLink>
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
                        <BtnDefault to="" onClick={() => setModal(true)}>Adicionar ao carrinho</BtnDefault>
                    </CardDetails>
                    <CardDetails>
                        <div> <img src={fundoCard} alt="Imagem Pizza" /> </div>
                        <h3>Pizza Marguerita</h3>
                        <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                        <BtnDefault to="" onClick={() => setModal(true)}>Adicionar ao carrinho</BtnDefault>
                    </CardDetails>
                    <CardDetails>
                        <div> <img src={fundoCard} alt="Imagem Pizza" /> </div>
                        <h3>Pizza Marguerita</h3>
                        <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                        <BtnDefault to="" onClick={() => setModal(true)}>Adicionar ao carrinho</BtnDefault>
                    </CardDetails>
                    <CardDetails>
                        <div> <img src={fundoCard} alt="Imagem Pizza" /> </div>
                        <h3>Pizza Marguerita</h3>
                        <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                        <BtnDefault to="" onClick={() => setModal(true)}>Adicionar ao carrinho</BtnDefault>
                    </CardDetails>
                    <CardDetails>
                        <div> <img src={fundoCard} alt="Imagem Pizza" /> </div>
                        <h3>Pizza Marguerita</h3>
                        <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                        <BtnDefault to="" onClick={() => setModal(true)}>Adicionar ao carrinho</BtnDefault>
                    </CardDetails>
                    <CardDetails>
                        <div> <img src={fundoCard} alt="Imagem Pizza" /> </div>
                        <h3>Pizza Marguerita</h3>
                        <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                        <BtnDefault to="" onClick={() => setModal(true)}>Adicionar ao carrinho</BtnDefault>
                    </CardDetails>
                </SectionCardsDetails>
                <Modal className={modal ? 'visible' : ''}>
                    <ModalContent>
                        <div>
                            <img src={pizzaModal} alt="Pizza Modal" />
                        </div>

                        <div>
                            <header>
                                <h3>Pizza Marguerita</h3>
                                <div>
                                    <img src={iconClose} alt="Botão de fechar"
                                        onClick={() => setModal(false)}
                                    />
                                </div>
                            </header>

                            <p>
                                A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião. <br /><br />

                                Serve: de 2 a 3 pessoas
                            </p>
                            <BtnDefault to="">Adicionar ao carrinho - R$ 60,00</BtnDefault>
                        </div>
                    </ModalContent>
                    <div className='overlay' onClick={() => setModal(false)}></div>
                </Modal>
            </Container>
            <Footer />
        </>
    )
}



export default RestaurantDetails


