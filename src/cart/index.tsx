import { CartContainer, Item, Overlay, SideBar, Amount } from "./styles"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../store"
import { checkoutOpen, closeCart, removeToCart } from "../store/reducers/cart"
import { formatPrice } from "../helpers/formatPrice"

const Cart = () => {
    const {  isOpenCart, pratos } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    const closeCartHandler = () => {
        dispatch(closeCart())
    }

    const deleteItem = (id: number) => {
        dispatch(removeToCart(id))
    }

    const getTotalPrice = () => {
        return pratos.reduce((acumulador, valorAtual) => {
            return (acumulador += valorAtual.preco)

        }, 0)
    }

    const checkout = () => {
        dispatch(checkoutOpen())
    }

    return (
        <CartContainer className={isOpenCart ? 'is-open' : ''} >
            <Overlay onClick={closeCartHandler} />
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
                    <p>Valor total: <span> {formatPrice(getTotalPrice())}</span></p>
                </Amount>
                <button
                    type="button"
                    onClick={checkout}
                >
                    Continuar com a entrega
                </button>
            </SideBar>
        </CartContainer>
    )
}

export default Cart