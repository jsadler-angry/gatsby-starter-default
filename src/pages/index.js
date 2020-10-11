import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

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
const HomeIntro2 = styled.div`
    color: #fff;
    background-color: black;
    padding: 2em;
`

const IndexPage = props => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <>
      <Layout>
      <HeaderWrapper>
      <h1>{data.title}</h1>
      <p>{data.intro}</p>
      <Button>Learn More</Button>
      </HeaderWrapper>
        <SEO title="Home" />
        <HomeIntro2>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
            <h2>{data.title}</h2>
            </div>
            <div className="col-lg-6">
            <p>{data.intro}</p>
            </div>
          </div>
        </div>
        </HomeIntro2>
      </Layout>
    </>
  )
}
export default IndexPage
