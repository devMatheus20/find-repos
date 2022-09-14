import styled from "styled-components";



export const Container = styled.div`
    background-color: #FFFFFF;  
    display: flex;
    flex-direction: column;
    padding: 30px;
    max-width: 600px;
    margin: 100px auto;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

    svg {
        cursor: pointer;

        :hover {
            filter: brightness(1.5);
        }

        :active {
            opacity: 0.8;
        }
    }
`

export const Owner = styled.div `
    margin: 0 auto;
    text-align: center;

    img {
        width: 150px;   
        object-fit: cover;
        border-radius: 20%;
    }

    h3 {
        font-size: 30px;
        color: #0D2636;
        margin: 30px 0;
    }

    p {
        max-width: 520px;
        font-size: 19px;
        line-height: 1.4;
    }
`

export const IssuesList = styled.ul `
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid #eee;
    list-style: none;

    h2 {
        text-align: center;
        margin: 10px 0 30px 0;
        font-size: 40px;
        color: #0D2636;
    }

    li {
        display: flex;
        padding: 15px 10px;
    }

    & + li {
        margin-top: 12px;
    }

    img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 2px solid #0D2616;
    }

    div {
        flex: 1;
        margin-left: 12px;


        strong {
            display: flex;
            flex-direction: column;
            font-size: 15px;

            a {
                text-decoration: none;
                color: #222;
                transition: 0.3s;
                
                :hover {
                    color: #0071db;
                }
            }

            span {
                background: #222;
                max-width: 200px;
                text-align: center;
                color: #fff;
                border-radius: 12px;
                font-size: 12px;
                font-weight: 600;
                padding: 7px 0;
                margin-top: 20px;
            }
        }

        p {
            margin-top: 10px;
            font-size: 12px;
            color: #000;
        }
    }
`

export const Actions = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
    padding: 0 20px;

    button {
        background-color: #222;
        padding: 5px 10px;
        border: none;
        border-radius: 4px;
        outline: none;
        color: #FFF;
        cursor: pointer;

        &:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        :hover {
            filter: brightness(1.5);
        }

        :active {
            opacity: 0.8;
        }
    }
`

export const FilterList = styled.div`
    width: 100%;
    margin: 30px auto;

    button {
        margin-right: 10px;
        padding: 8px;
        border: 1px solid #222;
        border-radius: 4px;
        outline: none;
        color: #222;
        cursor: pointer;
        transition: 0.3s;

        :hover {
            background-color: #0071db;
            color: #FFF;
        }

        :nth-child(${({active}) => active + 1}) {
            background-color: #0071db;
            color: #FFF;
        }
    }

`