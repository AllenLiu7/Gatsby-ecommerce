import React from "react"
import BackgroundImage from "gatsby-background-image"

export default function BackgroundSection({ title, imagedata, className }) {
  let image = imagedata

  const backgroundFluidImageStack = [
    image,
    `linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0, 0.5))`,
  ].reverse()

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      //the title position inside background image must adjust here
      fluid={backgroundFluidImageStack}
    >
      <h1 className="title text-white display-4 font-weight-bold">{title}</h1>
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default-title",
  className: "default-background",
}
