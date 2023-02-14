import React from "react";
import HelloSub from "./HelloSub";
import "./Hello.css";
import { useState } from "react";

export default function Hello(props) {
  console.log(props);
  //const [title, setTitle] = useState(props.title);
  const [cnt, setCnt] = useState(props.cnt);
  const msg = cnt > 20 ? "20보다 큰값인데용" : "20보다 작은값인데용?";

  return (
    <div>
      <h2>안녕하세용 감사해요 ({cnt})</h2>
      <button
        onClick={() => {
          setCnt(cnt + 1);
        }}
      >
        카운터증가
      </button>
      <button
        onClick={() => {
          setCnt(cnt - 1);
        }}
      >
        카운터감소
      </button>
      <div className="box">빨간박스를 써요~ 괜찮아요</div>
      <h3>{msg}</h3>
      <HelloSub />
    </div>
  );
}
