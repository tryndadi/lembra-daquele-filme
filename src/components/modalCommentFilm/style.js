import styled from "styled-components";

export const BtnAdd = styled.button`
  background: none;
  border: 2px solid #ffffff;
  border-radius: 8px;
  color: #ffffff;
  height: 4vh;
  :hover {
    cursor: pointer;
    border: 2px solid var(--bg-red-ligth);
    color: var(--bg-red-ligth);
  }
  @media screen and (min-width: 950px) {
    height: 5vh;
  }
`;
export const BtnClose = styled(BtnAdd)`
  color: var(--bg-red-ligth);
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.3rem;
  border: none;

  :hover {
    border: none;
    color: var(--bg-red-middle);
  }
`;
export const modalStyle = {
  overlay: {
    zIndex: "10",
    width: "100%",
    minHeight: "100%",
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  content: {
    position: "absolute",
    inset: "auto",
    width: "60%",
    maxWidth: "840px",
    display: "flex",
    border: "none",
    borderRadius: "8px",
    transform: "scale(0.8)",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "inherit",
    padding: "10px",
    color: "rgba(255, 255, 255, 0.7)",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  },
};

export const Image = styled.img`
  width: 100%;
  max-width: 350px;
  height: 87%;
  border-radius: 10px;
`;

export const Infos = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  max-width: 350px;
  min-height: 350px;
  justify-content: space-around;
  flex-direction: column;
  gap: 10px;

  h6 {
    font-size: 25px;
    width: 100%;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    @media screen and (min-width: 950px) {
      flex-direction: row;
    }
  }

  .username {
    color: #ff9b54;
    text-align: right;
  }

  input {
    border: none;
    border-radius: 5px;
    background: none;
    border: 2px solid var(--bg-red-middle);
    width: 100%;
    height: 6vh;
    color: white;
    outline: none;
    padding-left: 3px;
    font-size: 15px;
    font-weight: bold;

    @media screen and (min-width: 950px) {
      width: 65%;
    }
  }
  input::placeholder {
    color: white;
    padding-left: 4px;
  }
`;

export const ContainerComentario = styled.div`
  ul {
    height: 100%;
    max-height: 10vh;

    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    ::-webkit-scrollbar-track,
    ::-webkit-scrollbar-corner {
      background: var(--bg-red-middle);
    }

    ::-webkit-scrollbar-thumb {
      background: var(--bg-red-ligth);
      border-radius: 3px;
    }

    li {
      max-height: 50px;

      margin-bottom: 5px;
      padding: 5px 8px;

      background-color: var(--bg-red-low);
      color: #ffffff;

      border-radius: 5px;

      white-space: pre-wrap;
      overflow-wrap: anywhere;
    }

    @media screen and (min-width: 770px) and (max-width: 950px) {
      max-height: 50vh;
    }
    @media screen and (min-width: 950px) {
      max-height: 50vh;
    }
  }
`;
