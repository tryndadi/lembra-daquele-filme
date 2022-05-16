import styled from "styled-components";



export const ContainerSidebar = styled.div`

  width: 270px;
  height: 100vh;

  background: ${(props) => props.theme.colors.grey.ligth};

  .divider{
    width: 100%;
    height: 1px;

    margin: 8px 0;

    background: rgba(211, 174, 174, 1);
  }
`

export const section = {

  fontSize: '0.9rem',

  color: 'var(--grey-low)',
}

export const category = {

  pl: 4,
}