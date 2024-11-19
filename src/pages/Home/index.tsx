import { useEffect, useState } from "react";
import Restaurants from "../../components/Restaurants";

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
    const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
            .then((res) => res.json())
            .then((res) => setRestaurants(res))
    })

    return (
        <Restaurants restaurants={restaurants} />
    )
}

export default Home