import styled from "styled-components";

export const BtnClose = styled.button`
  background: none;
  border: none;
  :hover {
    cursor: pointer;
  }
  color: #fc094b;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 25px;
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
    overflow: "auto",
    position: "absolute",
    maxWidth: "840px",
    display: "flex",
    border: "none",
    transform: "scale(0.8)",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "inherit",
    padding: "10px",
    color: "rgba(255, 255, 255, 0.7)",
  },
};

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 350px;
  max-height: 490px;
  @media screen and (max-width: 576px) {
    margin-top: 25px;
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

export const BtnAdd = styled.button`
  border: none;
  font-size: 15px;
  color: #fc094b;
  text-transform: uppercase;
  background-color: transparent;
  min-width: 64px;
  padding: 6px 8px;
  :hover {
    background-color: #fc094b1a;
    font-size: 15.2px;
  }
`;
