import styled from "styled-components";

export const VerticalFade = styled.div`
  display: none;
  z-index: 3;
  width: 100%;
  height: 100%;
  position: absolute;
  transform: scale(1.008);
  background-color: black;
  transition: all 200ms ease-in;
  background: linear-gradient(to top, #111 20%, transparent 90%);
`;

export const InfosSection = styled.div`
  flex-direction: column;
  position: absolute;
  display: flex;
  padding: 10px;
  gap: 10px;
  bottom: 0;
`;

export const ButtonsSection = styled.div`
  gap: 15px;
  padding: 10px;
  display: flex;
  transition: all 200ms ease-in;
  justify-content: space-between;
  background: linear-gradient(to bottom, #111 10%, transparent 90%);
`;

export const iconStyle = {
  fontSize: "30px",
  color: "rgba(255,255,255,0.5)",
  cursor: "pointer",
};
