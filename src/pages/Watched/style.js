import styled from "styled-components";
import { VerticalFade } from "../../components/CardFade/styles";

export const StyleContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  background: ${(props) => props.theme.colors.background.gradient};

  display: flex;

  .cont-geral-dashboard {
    width: 100%;

    header {
      width: 100%;
      height: 120px;

      .cont-header {
        width: 100%;
        height: 100%;

        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 12px;

        box-sizing: border-box;

        .menu-img {
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .menu {
          width: 270px;

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

        img {
          width: 60px;
        }

        .cont-input-search {
          width: 100%;
          max-width: 220px;
          min-width: 195px;

          padding: 5px;

          border: 1px solid ${(props) => props.theme.colors.grey.light};
          border-radius: 10px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          input {
            width: 90%;

            background: transparent;
            color: #ffffff;

            border: none;

            outline: none;

            ::placeholder {
              color: ${(props) => props.theme.colors.grey.light};

              filter: opacity(70%);
            }
          }

          svg {
            color: ${(props) => props.theme.colors.grey.light};
          }
        }

        @media screen and (min-width: 770px) and (max-width: 950px) {
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-evenly;

          .menu-img {
            width: 50%;
          }
        }
        @media screen and (min-width: 950px) {
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
          width: 95%;
          .menu-img {
            width: 50%;
            justify-content: space-between;
            padding-left: 5%;
          }
        }
      }
    }

    main {
      width: 100%;
      padding-top: 30px;
      padding-left: 2%;

      h6 {
        padding-left: 15px;
      }
      nav {
        width: 100%;
        margin-bottom: 25px;

        ul {
          padding: 5px 5px 8px 5px;

          overflow-x: scroll;

          display: flex;

          ::-webkit-scrollbar {
            height: 5px;
            width: 5px;
          }

          ::-webkit-scrollbar-track {
            background: rgba(147, 17, 54, 0);
          }

          ::-webkit-scrollbar-thumb {
            background: ${(props) => props.theme.colors.card.light};
            border-radius: 3px;
          }

          li {
            font-size: 0.9rem;

            padding-right: 12px;

            color: ${(props) => props.theme.colors.grey.light};

            white-space: nowrap;

            cursor: pointer;

            :hover {
              color: ${(props) => props.theme.colors.card.light};
            }

            :last-child {
              padding: 0;
            }
          }
        }
      }

      .slide {
        h3 {
          color: ${(props) => props.theme.colors.grey.light};
        }
      }
    }
  }

  @media screen and (min-width: 570px) {
    header {
      .cont-header {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
      }
    }
    img {
    }

    main {
      nav {
        ul {
          li {
            font-size: 1rem;
          }
        }
      }
    }
  }
`;
export const CustomCard = styled.div`
  position: relative;
  transition: all 200ms ease-in;
  transform: scale(0.95);
  width: 150px;
  height: auto;
  background: rgba(0, 0, 0, 0.3);
  &:hover {
    z-index: 2;
    transition: all 200ms ease-in;
    transform: scale(1);
    ${VerticalFade} {
      opacity: 1;
    }
  }
`