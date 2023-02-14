import React from "react";
import TopHead from "../TopHead";
import "./Main.css";
import "./Service.css";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <div className="main">
        <TopHead />
      </div>
      <div className="imgSec">
        <img src="img/bg.jpg" alt=""></img>
        <div className="centerText">
          <p>
            Team Dobby's <br></br>
            Make DataSet Web Service
          </p>
          <Link to="/Service">
            <button className="centerBtn">서비스소개</button>
          </Link>
          <div></div>
        </div>
      </div>
    </div>
  );
}
