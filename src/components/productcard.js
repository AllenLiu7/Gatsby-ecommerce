import React from "react"
import Img from "gatsby-image"

export default function Productcard(props) {
  return (
    <div className="col-9 col-sm-10 col-md-4 col-lg-3 mx-auto my-3">
      {/* it is better to wrap the card in a div */}
      <div className="card " style={{ minHeight: "100%" }}>
        {/* the minimum height should be 100% of the parent div */}
        <Img fluid={props.node.image.fluid} className="card-img-top" />
        <div className="card-body text-center">
          <h6 className="card-title">{props.node.title}</h6>
          <h6 className="h6 card-text">${props.node.price}</h6>

          <button className="btn btn-warning text-capitalize">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}
