import styled from "styled-components";

export const CustomCard = styled.div`
  height: 300px;
  max-width: 200px;
  background-image: ${(props) => `url(${props.image})`};
  background-size: contain;
  background-repeat: no-repeat;

  &:hover {
    transform: scale(1.5);
    margin-left: 200px;
    margin-right: 200px;
  }
`;
