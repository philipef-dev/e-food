import { FooterSection, Logo, RedesSociais } from "./styles"

import logoEfood from '../../assets/images/logoE-food.svg'
import logoInstagram from '../../assets/images/logoInstagram.svg'
import logoFacebook from '../../assets/images/logoFacebook.svg'
import logoTwitter from '../../assets/images/logoTwitter.svg'
import { Container } from "../../styles/global"


const Footer = () => (
    <FooterSection>
        <Container>
            <Logo>
                <img src={logoEfood} alt="Logo E-Food" />
            </Logo>
            <RedesSociais>
                <div> <img src={logoInstagram} alt="" /></div>
                <div> <img src={logoFacebook} alt="" /></div>
                <div> <img src={logoTwitter} alt="" /> </div>
            </RedesSociais>
            <p>
                A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade <br/> dos produtos é toda do estabelecimento contratado.
            </p>
        </Container>
    </FooterSection>
)

export default Footer