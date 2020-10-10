import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Nav from "./navigation"

// const HeaderWrapper = styled.div`
//   margin-bottom: 1.45rem;
//   background-image: url(${require(`../../static/assets/IMG_0202.jpeg`)});
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-attachment: scroll;
//   height: 54em;
// `
const Logo = styled.div`
  display: inline-block;
  padding: 0.5rem 0.5rem;
  width: 400px;

  img {
    width: 50%%;
  }
`
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#333`,
      borderBottom: `1px solid #fff`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        // padding: `1.45rem 1.0875rem`,
      }}
    >
      <Logo>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
              display: `inline-block !important`,
            }}
          >
            <img
              src={require(`../../static/assets/aa-logo-final.png`)}
              alt="Angry Apples Homepage"
            />
          </Link>
        </h1>
      </Logo>
      <Nav></Nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
