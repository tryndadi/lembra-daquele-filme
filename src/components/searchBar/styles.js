import styled from 'styled-components'

export const InputSearch = styled.form`
    width: 220px;
    border: 2px solid ${(props) => props.theme.colors.grey.light};
    border-radius: 10px;
    padding-right: 50px;
    position: relative;
    height: 34px;
    input {
        padding-left: 10px;
        height: 100%;
        width: 100%;               
        display: flex;
        align-items: center;
        justify-content: space-between;        
        background: transparent;
        color: #ffffff;
        border: none;
        outline: none;
        font-size: 1.1rem;
        ::placeholder {
            color: ${(props) => props.theme.colors.grey.light};
            filter: opacity(70%);
        }       
        }    
    button {
        background-color: transparent;
        border: none;
        padding: 0;
        position: absolute;
        right: 10px;
        top: 5px;
        font-size: 24px;
        color: ${(props) => props.theme.colors.grey.light};
        &:hover{
            color: #FC094B;
        }
    }
`