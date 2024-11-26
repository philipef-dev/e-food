import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MenuItem, RestaurantsProps } from '../../pages/Home';
import DetailsModal from '../Modal';
import Footer from '../Footer';
import logoEfood from '../../assets/images/logoE-food.svg';
import { BtnDefault, Container } from '../../styles/global';

import {
    BannerDetails,
    CardDetails,
    HeaderDetails,
    SectionCardsDetails,
    StyledLink
} from './styles';

const RestaurantDetails = () => {
    const { id } = useParams()
    const [modal, setModal] = useState(false)
    const [selectItem, setSelectedItem] = useState<MenuItem | null>(null)
    const [restaurants, setRestaurants] = useState<RestaurantsProps>()

    const handleOpenModal = (item: MenuItem) => {
        setSelectedItem(item)
        setModal(true)
    }

    const handleCloseModal = () => {
        setModal(false)
        setSelectedItem(null)
    }

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then((res) => res.json())
            .then((res) => setRestaurants(res))
    }, [id])

    if (!restaurants) {
        return (
            <Container>
                <h3>Carregando...</h3>
            </Container>
        )
    }

    const getDescription = (description: string) => {
        if (description.length > 150) {
            return description.slice(0, 150) + '...'
        }
    }

    return (
        <>
            <HeaderDetails>
                <StyledLink to={'/'}>Restaurantes</StyledLink>
                <div>
                    <img src={logoEfood} alt="Logo e-food" />
                </div>
                <h2> 0 produtos(s) no carrinho</h2>
            </HeaderDetails>
            <BannerDetails style={{ backgroundImage: `url(${restaurants.capa})` }}>
                <p>{restaurants.tipo}</p>
                <h2>{restaurants.titulo}</h2>
            </BannerDetails>
            <Container>
                <SectionCardsDetails>
                    {restaurants.cardapio.map((item) => (
                        <CardDetails key={item.id}>
                            <div>
                                <img src={item.foto} alt="" />
                            </div>
                            <h3>{item.nome}</h3>
                            <p> {getDescription(item.descricao)}</p>
                            <BtnDefault to=""
                                onClick={() => handleOpenModal(item)}>Adicionar ao carrinho
                            </BtnDefault>
                        </CardDetails>
                    ))}
                </SectionCardsDetails>
                {selectItem ?
                    <DetailsModal
                        isVisible={modal}
                        onClose={handleCloseModal}
                        selectItem={selectItem}
                    /> : ''}
            </Container>
            <Footer />
        </>
    )
}

export default RestaurantDetails