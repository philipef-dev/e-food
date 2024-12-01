import styled from "styled-components";

export const InputGroup = styled.div`
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
    padding: 0 8px;
    font-weight: bold;
    color: black;
    margin-bottom: 2px;
    border: 2px solid var(--white);
    background-color: var(--white);
  }

  small {
     margin-bottom: 8px;
     
  }

  &.mid-size {
    flex-direction: row;
    margin-bottom: 8px;
    gap: 34px;

    input {
        width: 155px;
        margin-top: 8px;
    }
  }

`