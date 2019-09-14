import React from "react"
import Img from "gatsby-image"

export default function Productcard({ node }) {
  return (
    <div className="col-9 col-sm-10 col-md-4 col-lg-3 mx-auto my-3">
      {/* it is better to wrap the card in a div */}
      <div className="card " style={{ minHeight: "100%" }}>
        {/* the minimum height should be 100% of the parent div */}
        <Img fluid={node.image.fluid} className="card-img-top" />
        <div className="card-body text-center">
          <h6 className="card-title">{node.title}</h6>
          <h6 className="h6 card-text">${node.price}</h6>

          <button
            className="btn btn-warning text-capitalize snipcart-add-item"
            data-item-id={node.id}
            data-item-name={node.title}
            data-item-price={node.price}
            data-item-url="https://gatsby-shop-prac.netlify.com/"
            data-item-image={node.image.fluid.src}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}
