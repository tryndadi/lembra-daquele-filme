import styled from "styled-components";

export const BtnAdd = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  :hover {
    cursor: pointer;
  }
`;

export const BtnClose = styled(BtnAdd)`
  color: red;
  position: absolute;
  top: 10px;
  right: 10px;
`;
export const modalStyle = {
  overlay: {
    width: "100%",
    minHeight: "100vh",
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  content: {
    position: "absolute",
    maxWidth: "840px",
    display: "flex",
    border: "none",
    transform: "scale(0.8)",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "inherit",
    padding: "10px",
    color: "rgba(255, 255, 255, 0.7)",
  },
};

export const ModalBody = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 350px;
  @media screen and (max-width: 576px) {
    margin-top: 200px;
  }
`;

export const Infos = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  max-width: 350px;
  min-height: 350px;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;
