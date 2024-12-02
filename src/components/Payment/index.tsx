import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { Button, ButtonContainer, SideBar, SideBarContainer } from "../../cart/styles"
import { InputGroup } from "../Checkout/styles"
import { addCardInfos, clear, closeCart, closePaymemt, openAddress } from "../../store/reducers/cart"
import * as Yup from 'yup';
import { useFormik } from "formik"
import { usePurchaseMutation } from "../../services/api"
import { formatPrice } from "../../helpers/formatPrice"
import * as S from './styles'


const Payment = () => {
    const [purchase, { isSuccess, data }] = usePurchaseMutation()
    const { paymentOpen, items, clientAddress } = useSelector((state: RootReducer) => state.cart)
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
            purchase({
                products: clientAddress.products,
                delivery: clientAddress.delivery,
                payment: {
                    card: {
                        name: values.nameOwnerCard,
                        number: values.numberCard,
                        code: Number(values.codeCard),
                        expires: {
                            month: Number(values.dueMonth),
                            year: Number(values.expiryYear),
                        },
                    },
                },
            });

            dispatch(
                addCardInfos({
                    payment: {
                        card: {
                            name: values.nameOwnerCard,
                            number: values.numberCard,
                            code: Number(values.codeCard),
                            expires: {
                                month: Number(values.dueMonth),
                                year: Number(values.expiryYear),
                            },
                        },
                    },
                })
            );
        },
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
        dispatch(closePaymemt())
        dispatch(openAddress())
    }

    const endPurchase = () => {
        dispatch(clear())
        dispatch(closePaymemt())
        dispatch(closeCart())
    }    

    const getTotalPrice = () => {
        return items.reduce((acc, valorAtual) => {
            return (acc += valorAtual.preco)
        }, 0)
    }

    const closeSideBar = () => {
        dispatch(closePaymemt())
        dispatch(closeCart())
    }

    return (
        <form onSubmit={form.handleSubmit}>
            <SideBarContainer className={paymentOpen ? 'payment-is-open' : ''}>
                <S.Overlay onClick={closeSideBar}/>
                <SideBar>
                    {isSuccess ? (
                        <S.Success>
                            <h3>Pedido realizado - {data?.orderId}</h3>
                            
                            <p>
                                Estamos felizes em informar que seu pedido já está em processo
                                de preparação e, em breve, será entregue no endereço fornecido. <br /><br />
                            </p>
                            <p>
                                Gostaríamos de ressaltar que nossos entregadores não estão
                                autorizados a realizar cobranças extras. <br /><br />
                            </p>
                            <p>
                                Lembre-se da importância de higienizar as mãos após o
                                recebimento do pedido, garantindo assim sua segurança e
                                bem-estar durante a refeição. <br /><br />
                            </p>
                            <p>
                                Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite! <br /><br />
                            </p>
                            <Button
                                title="Concluir compra"
                                type="button"
                                onClick={endPurchase}
                            >
                                Concluir
                            </Button>
                        </S.Success>
                    ) : (
                        <>
                            <h2>Pagamento - Valor a pagar {formatPrice(getTotalPrice())}</h2>
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
                            <ButtonContainer>
                                <Button
                                    type="submit"
                                    disabled={!form.isValid}
                                >
                                    Finalizar pagamento
                                </Button>
                                <Button
                                    type="button"
                                    onClick={goToCheckout}
                                >
                                    Voltar para a edição de endereço
                                </Button>

                            </ButtonContainer>
                        </>
                    )}
                </SideBar>
            </SideBarContainer>
        </form>
    )
}

export default Payment