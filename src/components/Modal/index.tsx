import { BtnDefault } from "../../styles/global";
import { Modal, ModalContent } from "./styles";

import iconClose from '../../assets/images/btnClose.svg'

type Props = {
    isVisible: boolean;
    onClose: () => void;
    selectItem?: {
        nome: string;
        descricao: string;
        foto: string;
        preco: number;
        porcao: string;
    }
}

const DetailsModal = ({ isVisible, onClose, selectItem }: Props) => {
    if(!isVisible || !selectItem) return null;

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
                    <BtnDefault to="">Adicionar ao carrinho - R$ {selectItem.preco}</BtnDefault>
                </div>
            </ModalContent>
            <div className='overlay' onClick={onClose}></div>
        </Modal>
    )
}

export default DetailsModal