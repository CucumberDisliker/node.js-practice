import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = () => {
  const [hide, setHide] = useState({
    menu1: false,
    menu2: false,
  });
  const mouseEvent = (menuName, bool) => {
    const change = { ...hide };
    change[menuName] = bool;
    setHide(change);
  };
  return (
    <nav className="nav">
      <ul className="navContainer">
        <li
          className={hide["menu1"] ? "active" : "none"}
          onMouseEnter={() => mouseEvent("menu1", true)}
          onMouseLeave={() => mouseEvent("menu1", false)}
        >
          <Link to="/Service" className="aTag">
            <p>{`서비스소개`}</p>
          </Link>
        </li>

        <li
          className={hide["menu2"] ? "active" : "none"}
          onMouseEnter={() => mouseEvent("menu2", true)}
          onMouseLeave={() => mouseEvent("menu2", false)}
        >
          <Link to="/Generate" className="aTag">
            <p>{`이미지제작`}</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Category;
