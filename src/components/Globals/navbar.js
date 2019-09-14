import React, { Component } from "react"
import { Link } from "gatsby"
import { FaCartArrowDown } from "react-icons/fa"
import logo from "../../images/logo.svg"

export default class Navbar extends Component {
  state = {
    toggleOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/about",
        text: "about",
      },
    ],
  }

  toggleHandler = () => {
    this.state.toggleOpen
      ? this.setState({ toggleOpen: false, css: "collapse navbar-collapse" })
      : this.setState({
          toggleOpen: true,
          css: "collapse navbar-collapse show",
        })
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.toggleHandler}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                </li>
              )
            })}
            <Link
              to=""
              className="snipcart-checkout nav-item mt-2 ml-4 cart-icon"
            >
              <FaCartArrowDown />
            </Link>
          </ul>
        </div>
      </nav>
    )
  }
}
