import styled from "styled-components";

export const Container = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    justify-content: end;
    display: flex;
    z-index: 1;
    display: none;

    &.address-is-open {
        display: flex;
    }

    h3 {
        font-size: 16px;
        margin-bottom: 16px;
        color: var(--white);
    }    
`
export const Row = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 8px;
  }

  input {
    height: 32px;
    margin-bottom: 8px;
    padding: 0 8px;

    font-weight: bold;
    color: black;
    
    border: 2px solid var(--white);
    background-color: var(--white);
  }

  &.mid-size {
    flex-direction: row;
    gap: 34px;

    input {
        width: 155px;
        margin-top: 8px;
    }
  }

`