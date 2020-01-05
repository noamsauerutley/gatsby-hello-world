import styled from 'styled-components'

export const StyledP = styled.p`
text-align: center;
margin: 0 auto;
height: 100vh;
line-height: 100vh;
font-family: helvetica;
font-weight: bold;
color: #725A93 ;
font-size: 50px;
background: #ECE4F9;

transition: font-size 2s ease-in-out, color 2s ease-in-out;

&:hover{
    font-size: 65px;
    color: teal;
}
`

export const StyledUl = styled.ul`
list-style: none;
text-align: center;
margin: 0 auto;
height: 100vh;
line-height: 10vh;
font-family: helvetica;
font-weight: bold;
color: #725A93 ;
font-size: 25px;
background: #ECE4F9;
`

export const StyledLink = styled.a`
color: #725A93;
transition: color 2s ease-in-out;
text-decoration: none;

&:hover{
    color: teal;
}

&:focus{
    color: white;
}
`