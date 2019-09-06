import React from "react"
import BackgroundImage from "gatsby-background-image"

export default function BackgroundSection({ title, imagedata, className }) {
  return (
    <BackgroundImage
      Tag="section"
      className={className}
      //the title position inside background image must ajust here
      fluid={imagedata}>
      <h1 className="title text-white display-4 font-weight-bold">
        {title}
      </h1>
      
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default-title",
  className: "default-background",
}
