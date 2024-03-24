import React from "react";
import "./Navbar.css";
import { NAVBAR_ITEMS } from "../../static";
import { FaApple } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoBagHandle } from "react-icons/io5";

function Navbar() {
  return (
    <div className="nav">
      <div className="container">
        <div className="nav-all">
          <FaApple className="apple-icon" />
          <ul className="nav-list">
            {NAVBAR_ITEMS.map((el, index) => (
              <li key={index} className="nav-items">
                {el}
              </li>
            ))}
          </ul>
          <IoSearchOutline className="search-icon" />
          <IoBagHandle className="cart-icon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
