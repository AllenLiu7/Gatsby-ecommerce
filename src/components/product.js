import React from "react"
import Title from "../components/Globals/Title"
import Productcard from "../components/productcard"

export default function Product(props) {
  console.log(props)
  return (
    <section className="py-5">
      <div className="container">
        <Title title={"Our Products"} />
        <div className="row justify-content-center ">
          {props.item.edges.map(({ node }) => {
            return <Productcard key={node.id} node={node} />
          })}
        </div>
      </div>
    </section>
  )
}
