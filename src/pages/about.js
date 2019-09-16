import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/info"

const About = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      imagedata={data.img.childImageSharp.fluid}
      title={"Regular Joe's"}
      className={"about-background text-center"}
    />
    <Info />
  </Layout>
)

export const qurey = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default About
