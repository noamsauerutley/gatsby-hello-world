import React from "react"
import styled from 'styled-components'

const StyledDiv = styled.div`
    text-align: center;
    margin: 0 auto;
    height: 97vh;
    line-height: 97vh;
    font-family: helvetica;
    font-weight: bold;
    color: #725A93 ;
    font-size: 50px;
    background: #ECE4F9;

    transition: font-size 2s ease-in-out, color 2s ease-in-out;

    &:hover{
        font-size: 65px;
        color: #66119A;
    }
`

export default () => <StyledDiv>Hello world!</StyledDiv>
