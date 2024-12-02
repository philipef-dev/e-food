import { useDispatch, useSelector } from "react-redux"
import { closeCart, openAddress, removeCart } from "../store/reducers/cart"
import { RootReducer } from "../store"
import { formatPrice } from "../helpers/formatPrice"
import { SideBarContainer, Item, SideBar, Amount, Button } from "./styles"
import * as S from './styles'

const Cart = () => {
    const { cartIsOpen, items: pratos } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    const closeSideBar = () => {
        dispatch(closeCart())
    }

    const deleteItem = (id: number) => {
        dispatch(removeCart(id))
    }

    const getTotalPrice = () => {
        return pratos.reduce((acumulador, valorAtual) => {
            return (acumulador += valorAtual.preco)

        }, 0)
    }

    const checkoutPage = () => {
        dispatch(openAddress())
    }

    const existItems = pratos.length > 0

    return (
        <SideBarContainer className={cartIsOpen ? 'cart-is-open' : ''} >
            <S.Overlay onClick={closeSideBar} />
            <SideBar>
                {existItems ? (
                    <>
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
                            <div>
                                <p>Valor total: </p>
                            </div>
                            <span>
                                {formatPrice(getTotalPrice())}
                            </span>
                        </Amount>
                        <Button
                            type="button"
                            onClick={checkoutPage}
                        >
                            Continuar com a entrega
                        </Button>
                    </>
                ) : (
                    <div className="message-cart-empty">
                        <p>
                            O carrinho está vazio 😞, por favor adicione ao menos um prato do restaurante de sua preferência para continuar com a compra.
                        </p>
                    </div>
                )}
            </SideBar>
        </SideBarContainer>
    )
}

export default Cart