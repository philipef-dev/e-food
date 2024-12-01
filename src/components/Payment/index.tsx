import { useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { Overlay, SideBar } from "../../cart/styles"
import * as S from './styles'

const Payment = () => {
    const { paymentOpen } = useSelector((state: RootReducer) => state.cart)

    return (
        <S.Container className={paymentOpen ? 'payment-is-open' : ''}>
            <Overlay />
            <SideBar>
                <h3>Pagamento - Valor a pagar R$ 190,00</h3>
            </SideBar>
        </S.Container>
    )
}

export default Payment