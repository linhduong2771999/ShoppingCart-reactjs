import React, { Component } from "react";
import { Link } from "react-router-dom";

class PageWrapper extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container">
            <a className="navbar-brand" href="#">
              Shopping cart
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="collapsibleNavbar"
            >
              
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shopping">
                    Shopping
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbardrop"
                    data-toggle="dropdown"
                  >
                    About
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Portfolio
                    </a>
                    <a className="dropdown-item" href="#">
                      Services
                    </a>
                    <a className="dropdown-item" href="#">
                      Contact us
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default PageWrapper;
