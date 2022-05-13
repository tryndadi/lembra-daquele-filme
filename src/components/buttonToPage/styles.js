import styled from 'styled-components'

export const ButtonPage = styled.button`
    width: 70%;
    max-width: 400px;
    margin-bottom: .5rem;
    background-color: ${props => props.login ? "transparent" : "#FC094B"};    
    border: 2px solid ${props => props.login ? "#fff" : "#FC094B"};
    height: 2.5rem;
    border-radius: 10px;
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
    @media screen and (min-width: 769px){
        width: ${props => !props.login ? "50%" : "180px"};
        max-width: 400px;
        background-color: ${props => props.login ? "transparent" : "#fff"};
        border: 2px solid #fff;
        color: ${props => props.login ? "#fff" : "#FC094B"};        
        &:hover{
            background-color:  ${props => props.login ? "rgba(252, 9, 75, 0.26)" : "#FC094B"};
            border: 2px solid #FC094B;
            color: #fff;
        }
    }
`
