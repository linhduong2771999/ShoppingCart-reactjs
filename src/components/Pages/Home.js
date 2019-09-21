import React, { Component } from "react";
import img1 from "../assets/img/img-carousel.jpg";
import img2 from "../assets/img/img-carousel2.jpg";
import img3 from "../assets/img/img-carousel3.jpg";

class Home extends Component {
  render() {
    return (
      <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators mb-5">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} alt="carousel" width="100%" height="750px" />
          </div>
          <div className="carousel-item ">
            <img src={img2} alt="carousel" width="100%" height="750px" />
          </div>
          <div className="carousel-item ">
            <img src={img3} alt="carousel" width="100%" height="750px" />
          </div>
        </div>

        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    );
  }
}

export default Home;
