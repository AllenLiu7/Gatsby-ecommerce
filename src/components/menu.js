import React, { Component } from "react"
import Title from "../components/Globals/Title"
import Img from "gatsby-image"

export default class Menu extends Component {
  state = {
    item: this.props.item.edges,
  }

  render() {
    return (
      <section className="menu">
        <Title title="Our Menu" />
        <div className="container">
          <div className="row">
            {this.state.item.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-10 col-md-6 py-4 d-flex mx-auto"
                >
                  <div>
                    <Img fixed={node.image.fixed} />
                  </div>
                  <div className="flex-grow-1 mx-3">
                    <div className="d-flex justify-content-between">
                      <h6>{node.title}</h6>
                      <div>${node.price}</div>
                    </div>
                    <p>
                      <small>{node.description}</small>
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
