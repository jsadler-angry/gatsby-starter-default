import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "content" }, name: { eq: "about" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              image
              intro
              title
            }
          }
        }
      }
    }
  }
`

const HeaderWrapper = styled.div`
  margin-bottom: 1.45rem;
  background-image: url(${require(`../../static/assets/AAM_About_hero2.jpg`)});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  height: 34em;
`

const AboutPage = props => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <div>
      <Layout>
      <HeaderWrapper></HeaderWrapper>

        <SEO title="About" />
        <h1>{data.title}</h1>
        <p>{data.intro}</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <img src={data.image} alt="" />
        </div>

        <Link to="/about/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </Layout>
    </div>
  )
}
export default AboutPage
