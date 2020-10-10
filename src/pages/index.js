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
      filter: { sourceInstanceName: { eq: "content" }, name: { eq: "index" } }
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
  background-image: url(${require(`../../static/assets/IMG_0202.jpeg`)});
  background-size: cover;
  background-color: grey;
  background-repeat: no-repeat;
  background-attachment: scroll;
  height: 54em;
  text-align: center;
  padding 0 15rem;

  h1 {
    color: #fff;
    padding: 2em 0 2em
  }
  p {
    color: #fff;
  }
`

const IndexPage = props => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <>
      <Layout>
      <HeaderWrapper>
      <h1>{data.title}</h1>
      <p>{data.intro}</p>
      </HeaderWrapper>
        <SEO title="Home" />
        <h1>{data.title}</h1>
        <p>{data.intro}</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <img src={data.image} alt="" />
        </div>
        <Link to="/about/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </Layout>
    </>
  )
}
export default IndexPage
