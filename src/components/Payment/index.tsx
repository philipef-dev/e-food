import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { Overlay, SideBar, SideBarContainer } from "../../cart/styles"
import { InputGroup } from "../Checkout/styles"
import { checkoutOpen, paymentClose } from "../../store/reducers/cart"
import * as Yup from 'yup';
import { useFormik } from "formik"

const Payment = () => {
    const { paymentOpen } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    const form = useFormik({
        initialValues: {
            nameOwnerCard: '',
            numberCard: '',
            codeCard: '',
            dueMonth: '',
            expiryYear: ''
        },
        validationSchema: Yup.object({
            nameOwnerCard: Yup.string()
                .min(5, 'O campo requer mais do que 5 caracteres')
                .required('Campo obrigatório'),
            numberCard: Yup.string()
                .matches(/^\d{13,16}$/, 'Número do cartão inválido')
                .required('Campo obrigatório'),
            dueMonth: Yup.number()
                .min(1, 'Mês inválido')
                .max(12, 'Mês inválido')
                .required('Campo obrigatório'),
            expiryYear: Yup.number()
                .min(new Date().getFullYear(), 'Ano inválido')
                .required('Campo obrigatório'),
            codeCard: Yup.string()
                .matches(/^\d{3,4}$/, 'CVV inválido')
                .required('Campo obrigatório'),
        }),
        onSubmit: (values) => {
            console.log(values)
            dispatch(paymentClose())
        }
    })

    const getErrorMessage = (fieldName: keyof typeof form.errors) => {
        const isTouched = fieldName in form.touched
        const isError = fieldName in form.errors

        if (isTouched && isError) {
            return form.errors[fieldName]
        }
        return ''
    }

    const goToCheckout = () => {
        dispatch(paymentClose())
        dispatch(checkoutOpen())
    }

    return (
        <form onSubmit={form.handleSubmit}>
            <SideBarContainer className={paymentOpen ? 'payment-is-open' : ''}>
                <Overlay />
                <SideBar>
                    <h2>Pagamento - Valor a pagar R$ 190,00</h2>
                    <InputGroup>
                        <label htmlFor="nameOwnerCard">Nome no cartão*</label>
                        <input
                            type="text"
                            id="nameOwnerCard"
                            name="nameOwnerCard"
                            value={form.values.nameOwnerCard}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                        />
                        <small>{getErrorMessage('nameOwnerCard')}</small>
                    </InputGroup>
                    <InputGroup className="mid-size">
                        <div>
                            <label htmlFor="numberCard">Numero do cartão*</label>
                            <input
                                type="number"
                                id="numberCard"
                                name="numberCard"
                                value={form.values.numberCard}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                            <small>{getErrorMessage('numberCard')}</small>
                        </div>
                        <div>
                            <label htmlFor="codeCard">CVV*</label>
                            <input
                                type="number"
                                id="codeCard"
                                name="codeCard"
                                value={form.values.codeCard}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                            <small>{getErrorMessage('codeCard')}</small>
                        </div>
                    </InputGroup>
                    <InputGroup className="mid-size">
                        <div>
                            <label htmlFor="dueMonth">Mês de vencimento*</label>
                            <input
                                type="number"
                                id="dueMonth"
                                name="dueMonth"
                                value={form.values.dueMonth}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                            <small>{getErrorMessage('dueMonth')}</small>
                        </div>
                        <div>
                            <label htmlFor="expiryYear">Ano de vencimento*</label>
                            <input
                                type="number"
                                id="expiryYear"
                                name="expiryYear"
                                value={form.values.expiryYear}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                            <small>{getErrorMessage('expiryYear')}</small>
                        </div>
                    </InputGroup>
                    <button type="submit">Finalizar pagamento</button>
                    <button
                        type="button"
                        onClick={goToCheckout}
                    >
                        Voltar para a edição de endereço
                    </button>
                </SideBar>
            </SideBarContainer>
        </form>
    )
}

export default Payment