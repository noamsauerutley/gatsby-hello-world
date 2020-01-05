import React from 'react'
import Header from '../components/Header'
import { StyledUl, StyledLink } from '../assets/styledComponents'

export default () => 
    <div>
        <Header headerText="Contact Me :)" />
        <StyledUl>
            <li><StyledLink href="http://www.twitter.com/thevoidbutcozy">Twitter: @thevoidbutcozy</StyledLink></li>
            <li><StyledLink href="http://www.medium.com/@noamsauerutley">Medium: @noamsauerutley</StyledLink></li>
            <li><StyledLink href="http://www.github.com/noamsauerutley">Github: /noamsauerutley</StyledLink></li>
            <li><StyledLink href="http://www.linkedin.com/in/noamsauerutley">Linkedin: /noamsauerutley</StyledLink></li>
        </StyledUl>
    </div>
