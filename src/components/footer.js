import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const FooterMenuWrapper = styled.footer`
  height: 10em;
  background-color: #191618;
  display: inline-block;
  padding-top: 4rem;
  width: 100%;
  color: #fff;
   text-align: center;
  a {
      color: red;
  }

`

const Footer = ({ siteTitle }) => (
  <FooterMenuWrapper>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
  </FooterMenuWrapper>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
