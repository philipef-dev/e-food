import styled from "styled-components";

export const Container = styled.div`
      position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;

    display: none;
    justify-content: flex-end;

    &.payment-is-open {
        display: flex;
    }

    h3 {
        font-size: 16px;
        color: var(--white);
        margin-bottom: 16px;
        font-weight: 700;
    }
`