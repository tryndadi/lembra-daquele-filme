import styled from "styled-components";

export const BtnAdd = styled.button`
  background: none;
  border: 2px solid #ffffff;
  border-radius: 8px;
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
  font-size: 1rem;
`;
export const modalStyle = {
  overlay: {
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

export const Image = styled.img`
  width: 100%;
  max-width: 350px;
  
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
`;
