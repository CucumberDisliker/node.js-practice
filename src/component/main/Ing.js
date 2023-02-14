import React from "react";
import TopHead from "../TopHead";
import "./Main.css";
import "./Ing.css";
// import { Link } from "react-router-dom";

export default function Ing() {
  return (
    <div>
      <div className="main">
        <TopHead />
      </div>
      <div className="Ing_imgSec">
        <img src="img/bg.jpg" alt=""></img>
        <div className="centerText mainPic">
          <img src="img/BGlogo.png" alt="test" id="makeImg"></img>
          <div>
            <button className="Ing_btn">DOWNLOAD</button>
            <button className="Ing_btn">DELETE</button>
            <button className="Ing_btn">DOWNLOAD ALL</button>
          </div>
        </div>
      </div>
    </div>
  );
}
