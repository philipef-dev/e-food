import styled from "styled-components"

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;   

    img {
        width: 280px;
        height: 280px;
        object-fit: cover;
    }

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
        justify-content: space-between;
        align-items: baseline;

        img {
            cursor: pointer;
            width: 20px;
            height: 20px;
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