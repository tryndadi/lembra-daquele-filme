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
`;
export const modalStyle = {
  overlay: {
    backgroundColor: "#none",
  },
  content: {
    position: "relative",
    inset: "25% 25%",
    backgroundColor: "rgb(102, 21, 54)",
    opacity: 0.8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    border: "1px solid #FC094B",
    overflow: "auto",
    borderRadius: "2%",
    width: "45vw",
    height: "45vh",
    alignItems: "stretch",
  },
};
