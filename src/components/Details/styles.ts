import styled from "styled-components";
import headerImg from '../../assets/images/fundoHeader.png'
import bannerImg from '../../assets/images/fundoBanner.png'


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