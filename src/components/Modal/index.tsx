import { BtnDefault } from "../../styles/global";
import { Modal, ModalContent } from "./styles";

import iconClose from '../../assets/images/btnClose.svg'
import { useDispatch } from "react-redux";
import { addCart, openCart } from "../../store/reducers/cart";

import { MenuItem } from '../../pages/Home'
import { formatPrice } from "../../helpers/formatPrice";

type Props = {
    isVisible: boolean;
    onClose: () => void;
    selectItem?: MenuItem
}

const DetailsModal = ({ isVisible, onClose, selectItem }: Props) => {
    const dispatch = useDispatch()

    const handleOpenCart = () => {
        dispatch(openCart())
        dispatch(addCart(selectItem!))
        onClose()
    }

    if (!isVisible || !selectItem) return null;

    return (
        <Modal className={isVisible ? 'visible' : ''}>
            <ModalContent>
                <div>
                    <img src={selectItem.foto} alt="" />
                </div>
                <div>
                    <header>
                        <h3>{selectItem.nome}</h3>
                        <div>
                            <img src={iconClose} alt="Botão de fechar"
                                onClick={onClose}
                            />
                        </div>
                    </header>

                    <p>
                        {selectItem.descricao} <br /><br />

                        Serve: {selectItem.porcao}
                    </p>
                    <BtnDefault
                        to=""
                        onClick={handleOpenCart}
                    >
                        Adicionar ao carrinho - {formatPrice(selectItem.preco)}
                    </BtnDefault>
                </div>
            </ModalContent>
            <div className='overlay' onClick={onClose}></div>
        </Modal>
    )
}

export default DetailsModal