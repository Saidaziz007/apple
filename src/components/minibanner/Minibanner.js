import React from "react";
import "./Minibanner.css";
import { FaAngleRight } from "react-icons/fa6";

function Minibanner({ id, title, info, style, bg, color }) {
  return (
    <div style={style} className="minibanner">
      <h1 style={color}>{title}</h1>
      <p style={color}>{info}</p>
      <div className="minibanner-a">
        <a href="#">
          Learn more <FaAngleRight />
        </a>
        <a href="#">
          Buy <FaAngleRight />
        </a>
      </div>
    </div>
  );
}

export default Minibanner;
