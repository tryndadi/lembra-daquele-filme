import styled from "styled-components";

// MUDAR CORES PARA VARIAVEIS !!!!


export const InputContainer = styled.div`

  width: 100%;
  height: 30px;
  margin: 0px 0 15px 0;
  padding: 0 5px;

  background-color: transparent;

  border: 1px solid #E2DFDF; //TROCAR COR POR VAR
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

    ::placeholder{
      color: #E2DFDF;

      filter: opacity(55%);
    }
  }

  svg{
    color: #E2DFDF; //TROCAR COR POR VAR
  }

`