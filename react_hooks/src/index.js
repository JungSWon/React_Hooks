import React, { useEffect } from "react";
import ReactDOM from "react-dom";

// 마우스가 페이지를 벗어날때 실행
const useBeforeLeave = onBefore => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = e => {
    console.log(e);
    const { clientY } = e;
    // 마우스가 화면 위로 벗어나는 경우
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  });
};

const App = () => {
  const begForLife = () => console.log("please dont leave");
  useBeforeLeave(begForLife);
  return (
      <div className="App">
        <h1> Yey</h1>
      </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
