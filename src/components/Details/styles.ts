import styled from "styled-components";
import headerImg from '../../assets/images/fundoHeader.png'
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
        display: block;
       max-width: 100%;
       object-fit: cover;
    }

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