import styled, { keyframes } from "styled-components";

const apperFromRigth = keyframes`from{
  opacity: 0;
  transform: translateX(50px);
}
to{
  opacity: 1;
  transform: translateX(0px);
}
`;

export const ContainerGeral = styled.div`
  width: 100%;
  height: 100vh;

  background: ${(props) => props.theme.colors.background.gradient};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  .ancora-logo {
    margin-top: 1rem;
    margin-bottom: 2rem;

    animation: ${apperFromRigth} 1.5s;

    img {
      width: 100%;
      max-width: 12rem;
    }
  }

  .cont-form {
    width: 100%;
    max-width: 320px;
    min-width: 250px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;

    animation: ${apperFromRigth} 1.5s;

    h2 {
      font-size: 2rem;

      margin-bottom: 1rem;

      color: #ffffff;
    }

    form {
      width: 100%;
      padding: 0 15px;

      display: flex;
      flex-direction: column;
      align-items: center;

      box-sizing: border-box;

      button {
        width: 70%;
        height: 30px;

        border: 1px solid #ffffff;
        border-radius: 10px;

        background: transparent;
        color: #ffffff;

        :hover {
          border-color: ${(props) =>
            props.theme.colors.card.light}; //TROCAR COR PELA VAR

          background-color: rgba(252, 9, 75, 0.26);
        }
      }
    }

    span.mensagem {
      font-size: 0.8rem;

      margin-top: 15px;

      color: #ffffff;

      a {
        font-weight: bold;
        text-decoration: none;

        color: #ffffff;

        :hover {
          color: ${(props) => props.theme.colors.card.light};
        }
      }
    }
  }

  .copyright {
    position: absolute;
    bottom: 0px;

    font-size: 0.6rem;

    margin-bottom: 5px;

    color: #ffffff;
  }

  @media screen and (max-width: 700px) {
    .cont-form {
      margin-top: 4rem;
    }

    .ancora-logo {
      align-self: center;
    }
  }
`;
