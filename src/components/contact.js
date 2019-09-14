import React from "react"
import Title from "../components/Globals/Title"

export default function Contact() {
  return (
    <section className="pb-5">
      <Title title={"Contact Us"} />
      <div className="row justify-content-center">
        <form className="col-5">
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label for="description">description</label>
            <textarea class="form-control" id="description" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-warning">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}