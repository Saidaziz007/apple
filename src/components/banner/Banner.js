import React from "react";
import "./Banner.css";
import { FaAngleRight } from "react-icons/fa6";

function Banner({ id, title, info, style, bg, color }) {
  return (
    <section style={style} className="banner">
      <div className="container">
        <div className="banner-1">
          <h1 style={color}>{title}</h1>
          <p style={color}>{info}</p>
          <div className="banner-a">
            <a href="#">
              Learn more <FaAngleRight />
            </a>
            <a href="#">
              Buy <FaAngleRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
