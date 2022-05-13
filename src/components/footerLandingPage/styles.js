import styled from "styled-components";

export const Container = styled.footer`
  box-sizing: border-box;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  align-items: center;
  >div{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .copyright {    
    font-size: 0.6rem;
    margin: 5px 0px;
    color: #ffffff;
  }
`;
export const DevContainer = styled.div`
  width: 100px;
  
  text-align: center;  
  margin: 1rem;
  figure{
    width: 100%;
    overflow: hidden;
    border-radius: 50%;
    >img{
      width: 100%;
    }
  }
  p{
    height: 2.1rem;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  span{
    font-size: 0.8rem;    
  }
  div svg {
    margin-top:  0.5rem;
  }
  div a {
    color: #fff;
    transition: 0.3s;
    &:hover{
      color: #FC094B;
    }
  }
  div{
    display: flex;
    justify-content: space-evenly;
  }
`;
