import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/info"
import Menu from "../components/menu"
import Product from "../components/product"
import Contact from "../components/contact"
import VideoBack from "../components/Globals/videoBackground"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <VideoBack></VideoBack>
    {/* <BackgroundSection
      imagedata={data.img.childImageSharp.fluid}
      title={"Regular Joe's"}
      className={"default-background text-center"}
      // here it is trick to add text-center plus the align-item center to make the title center.
    /> */}
    <Info />
    <Menu item={data.menu} />
    <Product item={data.product} />
    <Contact />
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
          id
          title
          description
          price
          image {
            fluid(maxHeight: 300, maxWidth: 500) {
              src
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default IndexPage
