import React from "react";
import "./TopHead.css";
import Category from "./Category";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <div>
      <div className="header">
        <div>
          <Link to="/">
            <img src="img/BGlogo_white.png" id="logoPlace" alt="logo"></img>
          </Link>
        </div>

        <Category />
      </div>
    </div>
  );
}
