import React from "react"
import BackgroundImage from "gatsby-background-image"

export default function BackgroundSection({ title, imagedata, className }) {
  return (
    <BackgroundImage
      Tag="section"
      className="default-background"
      fluid={imagedata}
    >
      <h1 className="text-white text-center display-4 font-weight-bold mt-10rem">
        {title}
      </h1>
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default-title",
  className: "default-background",
}
