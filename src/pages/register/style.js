import styled from "styled-components";

// MUDAR COR POR VARIAVEIS !!!!!!

export const ContainerGeral = styled.div`

  width: 100%;
  height: 100vh;

  background: linear-gradient(360deg, rgba(48,25,51,1) 0%, rgba(132,19,56,1) 45%, rgba(171,16,58,1) 89%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;

  .ancora-logo{
    align-self: flex-end;

    img{
      width: 50px;
    }
  }

  .cont-form{
    width: 100%;
    max-width: 300px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;

    h2{
      font-size: 2em;

      margin-bottom: 30px;

      color: #ffffff;
    }

    form{
      width: 100%;
      padding: 0 15px;

      display: flex;
      flex-direction: column;
      align-items: center;

      box-sizing: border-box;

      button{
        width: 70%;
        height: 30px;

        border: 1px solid #ffffff;
        border-radius: 10px;

        background: transparent;
        color: #ffffff;

        :hover{
          border-color: #FC094B; //TROCAR COR PELA VAR

          background-color: rgba(252, 9, 75, 0.26);
        }
      }
    }

    span.mensagem{
      font-size: 0.8em;

      margin-top: 15px;

      color: #ffffff;

      a{
        font-weight: bold;
        text-decoration: none;

        color: #ffffff;

        :hover{
          color: #FC094B;
        }
      }
    }

  }

  .copyright{
    font-size: 0.6em;

    margin-bottom: 5px;

    color: #ffffff;
  }

  @media screen and (max-width: 550px) {
    
    .ancora-logo{
      align-self: center;
    }
  }
`