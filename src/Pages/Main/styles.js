import { isDisabled } from "@testing-library/user-event/dist/utils";
import styled, { keyframes } from "styled-components";


const rotate = keyframes`

from {transform: rotate(0)}

to {transform: rotate(360deg)}

`


export const Container = styled.div`
    background-color: #FFF;
    max-width: 700px;
    margin: 80px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0,0,0 ,0.2);

    h1 {
        font-size: 20px;
        display: flex;
        align-items: center;

        svg {
            margin-right: 10px;
        }
    }

    h3 {
        margin-top: 50px;
    }
`

export const Form = styled.form`
    display: flex;
    margin-top: 30px;

    input {
        width: 100%;
        padding: 10px 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 17px;
    }
`

export const SubmitButton = styled.button`
    background-color: #0D2636;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    margin-left: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    cursor: ${({ isLoading }) => isLoading && 'not-allowed'};
    opacity: ${({ isLoading }) => isLoading ? '0.5' : '1'};



    :hover {
        filter: brightness(1.5);
    }

    :active {
        opacity: 0.8;
    }

    .loading {
        animation: ${rotate} 1s infinite;
    }
`

export const List = styled.ul`
    margin-top: 40px;
    
    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;

        & + li {
            border-top: 1px solid #ccc;
        }

        div {
            display: flex;
            align-items: center;

            p {
                margin-left: 10px;
                font-size: 18px;
                letter-spacing: 0.5px;
            }
        }

        svg {
            cursor: pointer;
        }
    }
`