import styled from "styled-components";
import { css } from "styled-components";




export const InputContainer = styled.div`

  width: 100%;

  .container-input{
    width: 100%;
    height: 30px;
    margin: 0px 0 15px 0;
    padding: 0 5px;

    background-color: transparent;

    border: 1px solid ${props => props.theme.colors.grey.light};
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    box-sizing: border-box;


    input{
      width: 90%;

      background: transparent;
      color: #ffffff;

      border: none;

      outline: none;

      ::placeholder{
        color: ${props => props.theme.colors.grey.light};

        filter: opacity(55%);
      }
    }

    svg{
      color: ${props => props.theme.colors.grey.light};
    }

    ${
      props => props.isErrored && css`
        margin-top: 5px;

        border-color: ${props => props.theme.colors.text.error};

        svg{
          color: ${props => props.theme.colors.text.error};
        }
      `
    }
  }

`