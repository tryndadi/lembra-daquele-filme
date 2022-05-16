import styled from "styled-components";

export const StyleContainer = styled.div`
  width: 100vw;
  min-height: 100vh;

  background: ${(props) => props.theme.colors.background.gradient};

  header {
    width: 100vw;
    height: 90px;

    .cont-header {
      width: 100%;

      padding: 15px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      box-sizing: border-box;

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
    }
  }

  main {
    padding: 0 15px 15px 15px;

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

  @media screen and (max-width: 550px) {
    header {
      height: 130px;

      .cont-header {
        height: 100%;

        flex-direction: column;
      }
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
