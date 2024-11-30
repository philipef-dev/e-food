import { CartContainer, Item, Overlay, SideBar, Amount } from "./styles"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../store"
import { close, remove } from "../store/reducers/cart"
import { BtnDefault } from "../styles/global"
import { formatPrice } from "../helpers/formatPrice"

const Cart = () => {
    const { isOpen, pratos } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    const deleteItem = (id: number) => {
        dispatch(remove(id))
    }

    const getTotalPrice = () => {
        return pratos.reduce((acumulador, valorAtual) => {
            return (acumulador += valorAtual.preco)

        }, 0)
    }

    return (
        <CartContainer className={isOpen ? 'is-open' : ''} >
            <Overlay onClick={closeCart} />
            <SideBar>
                <ul>
                    {pratos.map((prato) => {
                        return (
                            <Item key={prato.id}>
                                <img src={prato.foto} />
                                <div>
                                    <h3>{prato.nome}</h3>
                                    <span> {formatPrice(prato.preco)}</span>
                                    <button
                                        type="button"
                                        onClick={() => deleteItem(prato.id)}
                                    />
                                </div>
                            </Item>
                        )
                    })}
                </ul>
                <Amount>
                    <p>Valor total:{formatPrice(getTotalPrice())}</p>
                    <span></span>

                </Amount>
                <BtnDefault to="#">Continuar com a entrega</BtnDefault>
            </SideBar>
        </CartContainer>
    )
}

export default Cart