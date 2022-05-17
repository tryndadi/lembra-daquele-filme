import styled from "styled-components";

export const ContainerSidebar = styled.div`
  
  .cont-infos-usuario{

    display: flex;
    align-items: center;

    img{
      width: 40px;

      border-radius: 50%;
    }

    .cont-nome-email{

      margin-left: 12px;

      display: flex;
      flex-direction: column;

      span:first-child{
        margin-bottom: 5px;

        font-weight: bold;
      }

      span:last-child{
        font-size: 0.8rem;
        font-weight: 300;
      }
    }

  }
`;

export const generalStyle = {
  width: '270px',
  color: '#E2DFDF',
}

export const section = {
  fontSize: "0.9rem",
  color: "var(--grey-low)",
};

export const category = {
  pl: 4,
};

export const divider = {
  width: '100%',
  height: '1px',
  margin: '20px 0',
  background: 'var(--bg-red-middle)',
}
