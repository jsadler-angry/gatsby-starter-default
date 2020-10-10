import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const MenuWrapper = styled.div`

  height: 1em;
  display: inline-block;
  float: right;
  margin-top: 2rem;
  li {
    display: inline-block;
    list-style: none;
    padding: 0 2rem;
  }
`

const Navigation = ({ siteTitle }) => (
  <MenuWrapper>
    <ul>
      <li>
        <Link
          to="/about"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          About{" "}
        </Link>
      </li>
      <li>
        <Link
          to="/team"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {" "}
          Team{" "}
        </Link>
      </li>
      <li>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Work{" "}
        </Link>
      </li>
    </ul>
  </MenuWrapper>
)

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
