import styled from "styled-components"
import grassbg from "../images/grassbg.jpg"
export const StyledFormWrapper = styled.div`
    display: flex;
    flex: 1;
    background: url(${grassbg});
    background-size: contain;
    height: calc(100vh - 74px);
    > div {
        background-color: rgba(255, 255, 255, 0.9);
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        width: 250px;
        margin: auto;
        margin-top: 25px;
        padding: 12px;
    }
    
    h1 {
        font-size: 1.5em;
    }
`

export const StyledForm = styled.div`
    margin-top: 4%;
    text-align: left;
    label{
        margin: 1%;
    }
    input, button {
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 5px;
        padding: 8px;
        width: 100%;
    }
    input {
        box-sizing: border-box;
        display: block;
        margin: 0.5%;
    }
    .errors {
        h3 {
            font-size: 14px;
            color: red;
        }
    }
    button {
        
        margin-top: 15px;
    }
`