import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.h1`
font-family: helvetica;
text-align: center;
color: #725A93;
`

export default (props) => <StyledHeader>{props.headerText}</StyledHeader>