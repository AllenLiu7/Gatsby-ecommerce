import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/info"
import Menu from "../components/menu"
import Product from "../components/product"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      imagedata={data.img.childImageSharp.fluid}
      title={"Regular Joe's"}
      className={"default-background"}
    />
    <Info />
    <Menu item={data.menu} />
    <Product item={data.product} />
  </Layout>
)

export const qurey = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCoffeeitem {
      edges {
        node {
          id
          title
          description
          price
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
    product: allContentfulProductforsell {
      edges {
        node {
          title
          description
          price
          image {
            fluid(maxHeight: 300, maxWidth: 500) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default IndexPage
