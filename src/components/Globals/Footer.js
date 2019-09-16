import React from "react"

const Footer = () => {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 mx-auto text-center text-white text-capitalize">
            <h4>
              All Rights Reserved &copy;{new Date().getFullYear().toString()}
            </h4>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
