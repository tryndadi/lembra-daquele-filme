import styled from 'styled-components'

export const Container = styled.div`
    color: rgba(226, 223, 223, 1);
    width: 100vw;
    min-height: 100vh;
    height: fit-content;
    background: linear-gradient(360deg, rgba(48,25,51,1) 0%, rgba(132,19,56,1) 45%, rgba(171,16,58,1) 89%);
`

export const Header = styled.div`
    display: none;

    @media screen and (min-width: 769px){
        display: flex;        
    }
`


export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img{
        width: 6rem;
        height: auto;
        margin: 1rem;
    }
    h2{
        
        text-align: center;
        width: 70%;
        font-weight: bold;
        font-size: 1.7rem;
        margin: 1rem;
    }
`
export const TopPageContainer = styled.div`
    >div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`