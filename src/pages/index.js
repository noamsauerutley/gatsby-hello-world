import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledDiv = styled.div`
    margin: 0 auto;
    font-family: helvetica;
    background: #ECE4F9;
    color: #725A93 ;
`

const StyledHeader = styled.header`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
`

const StyledP = styled.p`
    text-align: center;
    margin: 0 auto;
    height: 100vh;
    line-height: 100vh;
    font-weight: bold;
    color: #725A93 ;
    font-size: 50px;

    transition: font-size 2s ease-in-out, color 2s ease-in-out;

    &:hover{
        font-size: 65px;
        color: teal;
    }
`

export default () => 
    <StyledDiv>
        <StyledHeader>
        <Link to='/contact'>Contact</Link>
        <Link to='about'>About</Link>
        </StyledHeader>
        <StyledP>
            Hi, please hire me :)
        </StyledP>
    </StyledDiv>