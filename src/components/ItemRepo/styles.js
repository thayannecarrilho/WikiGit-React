import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    

    h3{
    font-size: 32px;
    color: #fafafa;
    }

    p{
    font-size: 16px;
    color: #fafafa60;
    margin-bottom: 20px;
    }

    a{
    background-color: #fafafa;
    border: 1px solid #fafafa;
    border-radius: 15px;
    padding: 10px;
    text-decoration: none;
    color: #111;
    font-weight: 700;

    &:hover{
    background-color: transparent;
    color: #fff;
    cursor: pointer;
    }
    }

    a#remove{
    margin-left: 10px;
    
    }

    hr{
    color: #fafafa60;
    margin-top: 30px;
    margin-bottom: 10px;
    }

`