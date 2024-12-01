import { useDispatch, useSelector } from "react-redux"
import { checkoutClose, openCart, paymentOpen } from "../../store/reducers/cart"
import { RootReducer } from "../../store"
import { Overlay, SideBar, SideBarContainer } from "../../cart/styles"
import * as S from './styles'

import * as Yup from 'yup';
import { useFormik } from "formik"

const Checkout = () => {
    const { checkoutOpen } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()    

    const form = useFormik({
        initialValues: {
            fullName: '',
            address: '',
            city: '',
            zipCode: '',
            houseNumber: '',
            complement: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .min(5, 'O campo requer mais do que 5 caracteres')
                .required('Campo obrigatório'),
            address: Yup.string()
                .min(5, 'O campo requer mais do que 5 caracteres')
                .required('Campo obrigatório'),
            city: Yup.string()
                .min(5, 'O campo requer mais do que 5 caracteres')
                .required('Campo obrigatório'),
            zipCode: Yup.string()
                .matches(/^\d{5}-\d{3}$/, 'Formato de CEP inválido')
                .required('O campo é obrigatório'),
            houseNumber: Yup.string()
                .min(1, 'O número da casa deve ter pelo menos 1 caractere')
                .max(5, 'O número da casa não pode ter mais que 5 caracteres')
                .required('Campo obrigatório'),
        }),
        onSubmit: (values) => {
            console.log(values)
            dispatch(checkoutClose())
            dispatch(paymentOpen())
        },
    })

    const backtoCart = () => {
        dispatch(checkoutClose())
        dispatch(openCart())
    }

    const getErrorMessage = (fieldName: keyof typeof form.errors) => {
        const isTouched = fieldName in form.touched
        const isError = fieldName in form.errors

        if (isTouched && isError) {
            return form.errors[fieldName]
        }
        return ''
    }

    return (
        <form onSubmit={form.handleSubmit}>
            <SideBarContainer className={checkoutOpen ? "address-is-open" : ''}>
                <Overlay />
                <SideBar>
                    <h2>Entrega</h2>
                    <S.InputGroup>
                        <label htmlFor="fullName">Quem irá receber *</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={form.values.fullName}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                        />
                        <small>{getErrorMessage('fullName')}</small>
                    </S.InputGroup>

                    <S.InputGroup>
                        <label htmlFor="address">Endereço *</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={form.values.address}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                        />
                        <small>{getErrorMessage('address')}</small>
                    </S.InputGroup>

                    <S.InputGroup>
                        <label htmlFor="city">Cidade *</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={form.values.city}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                        />
                        <small>{getErrorMessage('city')}</small>
                    </S.InputGroup>

                    <S.InputGroup className="mid-size">
                        <div>
                            <label htmlFor="zipCode">CEP *</label>
                            <input
                                type="text"
                                id="zipCode"
                                name="zipCode"
                                value={form.values.zipCode}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                            <small>{getErrorMessage('zipCode')}</small>
                        </div>

                        <div>
                            <label htmlFor="houseNumber">Número *</label>
                            <input
                                type="text"
                                id="houseNumber"
                                name="houseNumber"
                                value={form.values.houseNumber}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                            <small>{getErrorMessage('houseNumber')}</small>
                        </div>
                    </S.InputGroup>

                    <S.InputGroup>
                        <div>
                            <label htmlFor="complement">Complemento (opcional)</label>
                            <input
                                type="text"
                                id="complement"
                                name="complement"
                                value={form.values.complement}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                            <small>{getErrorMessage('complement')}</small>
                        </div>
                    </S.InputGroup>

                    <div style={{ display: "flex", flexDirection: "column", gap: '10px' }}>
                        <button
                            type="submit"
                            disabled={!form.isValid}
                        >
                            Continuar com o pagamento
                        </button>
                        <button
                            type="button"
                            onClick={backtoCart}
                        >
                            Voltar para o carrinho
                        </button>
                    </div>
                </SideBar>
            </SideBarContainer>
        </form>
    )
}

export default Checkout