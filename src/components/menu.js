import React, { Component } from "react"
import Title from "../components/Globals/Title"
import Img from "gatsby-image"

const getCategory = items => {
  const tempCategory = items.map(item => {
    return item.node.category
    //map the edges to make an array of categories. It used to be array of node.
  })
  let category = Array.from(new Set(tempCategory))
  //use Set to select the distinct item in the array, then them back to an array
  category = ["All", ...category]
  //add "All" to the array.
  return category
}

export default class Menu extends Component {
  state = {
    item: this.props.item.edges,
    coffeeitem: this.props.item.edges,
    categories: getCategory(this.props.item.edges),
    //filter the edges to a simple array with only include distinct category name
  }

  handleClick(category) {
    let tempItem = this.state.item
    if (category === "All") {
      this.setState(() => {
        return { coffeeitem: tempItem }
      })
    } else {
      tempItem = tempItem.filter(({ node }) => node.category === category)
      this.setState(() => {
        return { coffeeitem: tempItem }
      })
    }
  }

  render() {
    console.log(this.state.item)
    return (
      <section className="menu">
        <Title title="Our Menu" />
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              {this.state.categories.map((category, index) => {
                //['ALL', 'coffee', 'tea']
                return (
                  <button
                    key={index}
                    className="btn btn-outline-warning mx-2"
                    onClick={() => {
                      this.handleClick(category)
                    }}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
          <div className="row">
            {this.state.coffeeitem.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-10 col-md-6 py-3 d-flex mx-auto"
                >
                  <div>
                    <Img fixed={node.image.fixed} />
                  </div>
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">{node.title}</h6>
                      <h6 className="mb-0">${node.price}</h6>
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
