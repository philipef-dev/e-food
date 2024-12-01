import styled from "styled-components";

import btnDeleteItem from '../assets/images/btnDeleteItem.svg'
import { BtnDefault } from "../styles/global";


export const SideBarContainer = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    justify-content: end;
    display: flex;
    z-index: 1;
    display: none;

    &.is-open-cart, 
    &.address-is-open, 
    &.payment-is-open {
        display: flex;
    }    
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.73);   
`

export const SideBar = styled.aside`
    background-color: var(--pink);
    z-index: 1;
    padding: 32px 8px 0 8px;
    max-width: 360px;
    width: 100%;

    ${BtnDefault} {
        max-width: 100%;
        display: block;
        text-align: center;
    }

    h2 {
        font-size: 16px;
        margin-bottom: 16px;
        color: var(--white);
    }
`

export const Item = styled.li`
    display: flex;
    margin-bottom: 32px;
    background-color: #FFEBD9;
    color: var(--pink);
    padding: 8px;

    position: relative;

    img {
        width: 80px;
        height: 80px;
        margin-right: 8px;
        object-fit: cover;
    }  
    
    h3 {
        margin-bottom: 16px;        
    }

    span {
        font-size: 14px;
        font-weight: 400;
    }

    button {
        background-image: url(${btnDeleteItem});
        width: 16px;
        height: 16px;
        border: none;
        background-color: transparent;
        position: absolute;
        right: 10px;
        bottom: 10px;
        cursor: pointer;   
    }
`

export const Amount = styled.div`
    color: var(--white);
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 16px;   
` 
    
