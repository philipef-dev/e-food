import Restaurants from "../../components/Restaurants";
import { useGetRestaurantsQuery } from "../../services/api";

export type MenuItem = {
    foto: string,
    preco: number
    id: number,
    nome: string,
    descricao: string,
    porcao: string
}

export type RestaurantsProps = {
    id: number,
    destacado: boolean,
    titulo: string,
    tipo: string,
    avaliacao: number,
    descricao: number,
    capa: string,
    cardapio: MenuItem[]
}

const Home = () => {
    const { data: restaurants } = useGetRestaurantsQuery();

    if (!restaurants) {
        return (
            <h3>Carregando</h3>
        )
    }

    return (
        <Restaurants restaurants={restaurants} />
    )
}

export default Home