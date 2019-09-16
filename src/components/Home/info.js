import React, { Component } from "react"
import Title from "../Globals/Title"
import { Link } from "gatsby"

const Info = () => {
  return (
    <section className="py-6">
      <div className="container ">
        <div className="row">
          <div className="col text-center">
            <Title title="Our Story" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque reprehenderit molestias vel, rerum accusantium
              laboriosam placeat tenetur eum ipsam possimus neque voluptate
              autem ad odit earum sunt, voluptates porro? Quis tenetur a hic
              sint, ad obcaecati unde quo velit exercitationem nemo vel iste
              atque quasi voluptas. Nisi laboriosam nam itaque?
            </p>
            <Link to="/about">
              <button className="btn btn-outline-warning mb-5 my-4">
                About
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
