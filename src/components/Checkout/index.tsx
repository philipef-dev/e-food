import { useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { Container } from "./styles"


const Checkout = () => {
    const { checkoutOpen } = useSelector((state: RootReducer) => state.cart)

    return (
        <>
            {checkoutOpen ? <Container>

                <h2>Entrega</h2>

            </Container>: ''}
        </>
    )
}

export default Checkout