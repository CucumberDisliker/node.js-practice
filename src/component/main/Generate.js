import React from "react";
import TopHead from "../TopHead";
import "./Generate.css";

export default function Main() {
  return (
    <div>
      <div className="main">
        <TopHead />
      </div>
      <div className="imgSec">
        <img src="img/bg.jpg" alt=""></img>
        <div />
        <div className="Gen_centerText">
          <form action="/Ing">
            <div>
              <input
                spellCheck="false"
                className="serachInput"
                placeholder="검색어를 입력해주세요."
              ></input>
              <div className="searchBtn">
                <button type="submit" className="search">
                  검색
                </button>
              </div>
            </div>
          </form>

          <div className="underInput">
            <ul>
              <li>
                <input
                  type="number"
                  min="1"
                  max="1000"
                  placeholder="1~1000"
                ></input>
              </li>
              <li>
                <select className="uiSelect">
                  <option value="realistic" className="testing">
                    실사
                  </option>
                  <option value="cartoon" className="testing">
                    카툰
                  </option>
                </select>
              </li>
              <li>
                <select className="uiSelect">
                  <option value="funk" className="testing">
                    펑크
                  </option>
                  <option value="gothic" className="testing">
                    고딕
                  </option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
