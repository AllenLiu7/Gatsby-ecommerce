import React from "react"
import Title from "../components/Globals/Title"

export default function Contact() {
  return (
    <section>
      <div className="container">
        <Title title={"Contact Us"} />
        <div className="row justify-content-center mb-5">
          <div className="div form-group col-7">
            <label for="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="div form-group col-7">
            <label for="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="div form-group col-7">
            <label for="description">description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Write down your questions"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
