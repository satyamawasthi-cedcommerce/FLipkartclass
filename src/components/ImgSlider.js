import React, { Component } from "react";

export default class ImgSlider extends Component {
  render() {
    return (
      <>
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://rukminim1.flixcart.com/flap/1688/280/image/7b0efbcbf7ed2653.jpg?q=50"
                alt="Los Angeles"
                className="d-block"
                style={{ width: "100%" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://rukminim1.flixcart.com/flap/1688/280/image/2ffc0f75825a8b31.jpg?q=50"
                alt="Chicago"
                className="d-block"
                style={{ width: "100%" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://rukminim1.flixcart.com/flap/1688/280/image/3cb1ba85d7bd5017.jpg?q=50"
                alt="New York"
                className="d-block"
                style={{ width: "100%" }}
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </>
    );
  }
}
