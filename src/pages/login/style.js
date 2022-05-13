import styled from "styled-components";

export const Main = styled.div`

  width: 100%;
  height: 100vh;

  background: ${props => props.theme.colors.background.gradient};

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
    max-width: 320px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;

    h2{
      font-size: 2rem;

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
          border-color: ${props => props.theme.colors.card.light};

          background-color: rgba(252, 9, 75, 0.26);
        }
      }
    }

    span.mensagem{
      font-size: 0.8rem;

      margin-top: 15px;

      color: #ffffff;

      a{
        font-weight: bold;
        text-decoration: none;

        color: #ffffff;

        :hover{
          color: ${props => props.theme.colors.card.light};
        }
      }
    }

  }

  .copyright{
    font-size: 0.6rem;

    margin-bottom: 5px;

    color: #ffffff;
  }

  @media screen and (max-width: 550px) {
    
    .ancora-logo{
      align-self: center;
    }
  }
`