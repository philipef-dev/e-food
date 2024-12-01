import { useDispatch, useSelector } from "react-redux"
import { checkoutOpen, closeCart, removeToCart } from "../store/reducers/cart"
import { RootReducer } from "../store"
import { formatPrice } from "../helpers/formatPrice"
import { SideBarContainer, Item, Overlay, SideBar, Amount } from "./styles"

const Cart = () => {
    const {  isOpenCart, pratos } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    const closeSideBartHandler = () => {
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

    const checkoutPage = () => {
        dispatch(checkoutOpen())
    }    

    return (
        <SideBarContainer className={isOpenCart ? 'is-open-cart' : ''} >
            <Overlay onClick={closeSideBartHandler} />
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
                    onClick={checkoutPage}
                >
                    Continuar com a entrega
                </button>
            </SideBar>
        </SideBarContainer>
    )
}

export default Cart