import styled from "styled-components";


export const CustomCard = styled.div`
  
  transition: all 200ms ease-in;
  transform: scale(0.95);
  width: 150px;
  height: auto;
  div{
    button{
      background-color: transparent;
      border: 2px solid ${(props) => props.theme.colors.grey.light};
      color: ${(props) => props.theme.colors.grey.light};
      font-size: 0.9rem;
      border-radius: 5px;
      &:hover{
        border-color: red;
      }
    }
  }

  &:hover {
    z-index: 2;
    transition: all 200ms ease-in;
    transform: scale(1);
    
  }
`

export const StyleContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background.gradient}; 
  display : flex ;
  flex-direction: column;
  .cont-geral-dashboard {
    width: 100%;
    height: 100px;
    padding: 0px 40px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    header {
      width: 100%;
      .cont-header {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        .menu-img {
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .menu {
          width: 100px;
          display: flex;
          align-items: center;
          /* cursor: pointer; */
          span {
            margin-left: 10px;
            color: ${(props) => props.theme.colors.grey.light};
            cursor: pointer;
          }
          svg {
            width: 35px;
            height: 35px;
            color: ${(props) => props.theme.colors.grey.light};
            cursor: pointer;
          }
        }}
          img {
            width: 60px;
          }
          svg {
            color: ${(props) => props.theme.colors.grey.light};
          }
      }

        @media screen and (min-width: 770px) and (max-width: 950px) {
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;          
          a {
            width: fit-content;
          }
        }
        @media screen and (min-width: 950px) {
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
          width: 100%;
          
        }
      }
    }


  @media screen and (min-width: 570px) {
    header {
      .cont-header {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
      }
    }
    img {
    }

    main {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      
    }
  }
`
