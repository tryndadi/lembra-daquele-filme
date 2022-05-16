import styled from 'styled-components'

export const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    .container_text{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        
        >img{
            width: 90%;
            max-width: 500px;
        }
        >div{
            width: 90%;
            max-width: 500px;
            h3{
                font-size: 1.2rem;
                font-weight: bold;
                color: #fff;
                text-align: center;
                line-height: 1.4rem;
                margin-bottom: 8px;
            }
            p{
                font-size: 0.9rem;
                line-height: 1.1rem;
                text-align: justify;
                margin-bottom: 12px;
            }
        }
        @media screen and (min-width: 769px){
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            &:nth-child(odd){
                flex-direction: row-reverse;
            }
            >div{
                width: 50%;                
                h3{
                    font-size: 1.5rem;
                    line-height: 1.6rem;
                }
                p{
                    font-size: 1.2rem;
                    line-height: 1.4rem;
                }
            } 
            >img{
                width: 40%;
                margin: 10px;
                box-sizing: border-box;
            }       
        }
    }
`
