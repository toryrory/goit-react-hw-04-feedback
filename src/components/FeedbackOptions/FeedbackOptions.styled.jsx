import styled from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    width: 70px;
    font-size: 16px;
    background-color: #6dd6cb;
    border: 1px solid black;
    border-radius: 5px;
    
    :not(:last-child){
     margin-right: 15px;   
    }
`