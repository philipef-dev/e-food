import { useDispatch, useSelector } from "react-redux"
import { checkoutClose, openCart } from "../../store/reducers/cart"
import { RootReducer } from "../../store"
import { Overlay, SideBar } from "../../cart/styles"
import { BtnDefault } from "../../styles/global"
import * as S from './styles'

const Checkout = () => {
    const { checkoutOpen } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    const backtoCart = () => {
        dispatch(checkoutClose())
        dispatch(openCart())
    }    

    return (
        <S.Container className={checkoutOpen ? "address-is-open" : ''}>
            <Overlay />
            <SideBar>
                <h3>Entrega</h3>
                <S.Row>
                    <label htmlFor="name">Quem irá receber</label>
                    <input type="text" id="name" />
                </S.Row>

                <S.Row>
                    <label htmlFor="address">Endereço</label>
                    <input type="text" id="address" />
                </S.Row>

                <S.Row>
                    <label htmlFor="city">Cidade</label>
                    <input type="text" id="city" />
                </S.Row>

                <S.Row className="mid-size">
                    <div>
                        <label htmlFor="zipCode">CEP</label>
                        <input type="text" id="zipCode" />
                    </div>

                    <div>
                        <label htmlFor="houseNumber">Número</label>
                        <input type="text" id="houseNumber" name="houseNimber" />
                    </div>
                </S.Row>

                <S.Row>
                    <div>
                        <label htmlFor="complmento">Complemento (opcional)</label>
                        <input type="text" id="complmento" name="complmento" />
                    </div>
                </S.Row>

                <BtnDefault to=""> Continuar com o pagamento </BtnDefault>
                <button type="submit" onClick={backtoCart}>Voltar para o carrinho</button>
            </SideBar>
        </S.Container>
    )
}

export default Checkout