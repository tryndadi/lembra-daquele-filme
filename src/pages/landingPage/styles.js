import styled from 'styled-components'


export const Container = styled.div`
    margin: 0;
    color: rgba(226, 223, 223, 1);
    width: 100%;
    min-height: 100vh;
    height: fit-content;
    background: linear-gradient(360deg, rgba(48,25,51,1) 0%, rgba(132,19,56,1) 45%, rgba(171,16,58,1) 89%);
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
`

export const Header = styled.div`
    display: none;

    @media screen and (min-width: 769px){
        display: flex;
        width: 100%;
        justify-content: flex-end;
    }
`


export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    .img_logo{
        width: 7rem;
        
    }    
    h2{        
        text-align: center;
        width: 70%;
        font-weight: bold;
        font-size: 1.7rem;
        margin: 1rem;
    }
    @media screen and (min-width: 769px){ 
        width: 100%;
        .img_logo{
            width: 80%;
        }
        h2{
            margin: 2rem;
            width: 60%;
        }
    }
`
export const TopPageContainer = styled.div`
    box-sizing: border-box;
    img{
        width: 100%;
    }
    >div{
        display: flex;
        flex-direction: column;
        align-items: center;
        .div_button-login{
            width: 100%;
            display: flex;
            justify-content: center;
        }
        @media screen and (min-width: 769px){            
            width: 60%;                 
            >.div_button-login{
                display: none
            }
        }       
    }        
    @media screen and (min-width: 769px){            
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        max-width: 1000px;
        >img{
            width: 50%;
        }
        margin: 80px 0px;
    }
`