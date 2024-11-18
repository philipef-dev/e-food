import styled from "styled-components";
import headerImg from '../../assets/images/fundoHeader.png'
import bannerImg from '../../assets/images/fundoBanner.png'
import { Link } from 'react-router-dom'

export const HeaderDetails = styled.div`
    background-image: url(${headerImg});
    width: 100%;
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 65px 170px;    
    display: flex;
    justify-content: space-between;
    color: var(--pink);
    align-items: center;

    h2 {
        font-size: 18px;
    }
`

export const BannerDetails = styled.div`
    background-image: url(${bannerImg});
    width: 100%;
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 24px 170px;

    p {
        font-size: 32px;
        font-weight: 100;
        color: white;
        margin-bottom: 156px;
    } 
    
    h2 {
        font-weight: 900;
        font-size: 32px;
        color: white
    }
`

export const SectionCardsDetails = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 40px;
    row-gap: 32px;
    margin-bottom: 120px;
`

export const CardDetails = styled.div`
    background-color: var(--pink);
    width: 320px;
    padding: 8px;

    h3 {
        color: white;
        font-size: 16px;
        font-weight: 900;
        margin-top: 8px;
        margin-bottom: 8px;
    }

    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: white;
    }

    a {
        display: block;
        background-color: #FFEBD9;
        padding: 4px;
        text-decoration: none;
        color: var(--pink);
        font-weight: 700;
        font-size: 14px;
        text-align: center;
        margin-top: 8px;
    }
`
export const StyledLink = styled(Link)`
    color: var(--pink);
    font-size: 18px;
    font-weight: 900;
    text-decoration: none;
`
export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;   

    &.visible {
        display: flex;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.73);
    }
`

export const ModalContent = styled.div`
    display: flex;
    background-color: var(--pink);
    padding: 32px;
    max-width: 1024px;
    gap: 24px;

    z-index: 1;

    header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;

        img {
            cursor: pointer;
        }
    }

    h3 {
        font-weight: 900;
        font-size: 18px;
        color: white;
        margin-bottom: 16px;
        
    }

    p {
        color: white;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 16px;
    }
`