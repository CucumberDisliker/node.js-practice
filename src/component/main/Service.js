import TopHead from "../TopHead";
import "./Main.css";
import "./Service.css";

export default function Main() {
  return (
    <div>
      <div className="main">
        <TopHead />
      </div>
      <div className="imgSec">
        <img src="img/bg.jpg" alt=""></img>
        <div className="centerText" id="centerText">
          <p>
            개발자의 한숨 그 무거운 숨을<br></br>
            덜어내기 위해 개발합니다.
          </p>
          <div className="btnSec">
            <button className="btn" onClick={scroll1}>
              ▽
            </button>
          </div>
        </div>
      </div>
      <div className="secSec">
        <video loop autoPlay muted>
          <source src="video/시퀀스 01.mp4"></source>
          <p className="videoP">
            문단의 내용입니다 여기에 적어주세요
            <br></br>
            문단문단
          </p>
        </video>
      </div>
    </div>
  );
}
function scroll1() {
  window.scrollTo({ top: 1000, left: 0, behavior: "smooth" });
}
