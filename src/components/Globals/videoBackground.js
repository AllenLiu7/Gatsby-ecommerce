import React, { Component } from "react"
import video from "../../video/coffee.mp4"
import "./videoBack.css"

export default class videoBackground extends Component {
  render() {
    return (
      <section>
        <header>
          <div class="overlay"></div>
          <video
            playsinline="playsinline"
            autoplay="autoplay"
            muted="muted"
            loop="loop"
            src={video}
            type="video/mp4"
          ></video>
          <div class="container h-100">
            <div class="d-flex h-100 text-center align-items-center">
              <div class="w-100 text-white">
                <h1 class="display-3">Regular Joe's</h1>
              </div>
            </div>
          </div>
        </header>
      </section>
    )
  }
}
