import styled from "styled-components";

export const CustomCard = styled.ul`
  transition: all 200ms ease-in;
  transform: scale(0.95);
  width: 99%;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #661536eb;
  border-radius: 10px;

  img {
    width: 50%;
    max-width: 190px;
    height: 90%;
    border-radius: 10px;
  }
  .movie-tittle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
    text-align: center;
    color: ${(props) => props.theme.colors.grey.light};
    gap: 10px;
    padding-left: 12px;

    > span {
      width: 50%;
    }
  }
  div {
    display: flex;
    align-items: center;
    height: 30%;
    justify-content: center;
    gap: 12px;
    align-self: flex-end;
    padding-right: 12px;

    button {
      background-color: transparent;
      border: 2px solid ${(props) => props.theme.colors.grey.light};
      color: ${(props) => props.theme.colors.grey.light};
      font-size: 0.9rem;
      border-radius: 5px;
      &:hover {
        border-color: red;
      }
    }
  }

  &:hover {
    z-index: 2;
    transition: all 200ms ease-in;
    transform: scale(1);
  }

  @media screen and (min-width: 770px) and (max-width: 950px) {
    width: 50%;
    height: 40vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 50%;
      height: 30vh;
    }

    .movie-tittle {
      width: 100%;
      flex-direction: column;
      padding: 0;

      span {
        width: auto;
      }
    }
    div {
      width: 100%;
      height: 5.8vh;
      gap: 15px;
    }
  }
  @media screen and (min-width: 950px) {
    background: none;
    width: 33%;
    flex-direction: column;
    height: 45vh;
    justify-content: space-around;

    img {
      width: 100%;
      height: 32vh;
      max-height: 310px;
    }
    .movie-tittle {
      width: 100%;
      height: 35vh;
      flex-direction: column;
      padding: 0px;

      span {
        width: auto;
      }
    }
    div {
      flex-direction: row;
      width: 100%;
      height: 4vh;
      padding: 0px;
    }
  }
`;

export const StyleContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.background.gradient};
  display: flex;
  flex-direction: column;
  .cont-geral-dashboard {
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    header {
      width: 100%;
      .cont-header {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 10px;
        .menu-img {
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .menu {
          width: 100px;
          display: flex;
          align-items: center;
          /* cursor: pointer; */
          span {
            margin-left: 10px;
            color: ${(props) => props.theme.colors.grey.light};
            cursor: pointer;
          }
          svg {
            width: 35px;
            height: 35px;
            color: ${(props) => props.theme.colors.grey.light};
            cursor: pointer;
          }
        }
      }
      img {
        width: 60px;
      }
      svg {
        color: ${(props) => props.theme.colors.grey.light};
      }
    }

    @media screen and (min-width: 770px) and (max-width: 950px) {
      display: flex;
      flex-wrap: nowrap;
      a {
        width: fit-content;
      }
    }
    @media screen and (min-width: 950px) {
      display: flex;
      flex-wrap: nowrap;
      width: 100%;
    }

    main {
      width: 100%;
      height: 98%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
    }
    @media screen and (min-width: 770px) and (max-width: 950px) {
      main {
        flex-direction: row;
        flex-wrap: wrap;
      }
    }
    @media screen and (min-width: 950px) {
      main {
        flex-direction: row;
        flex-wrap: wrap;
      }
    }
  }
`;
