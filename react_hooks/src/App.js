import React from "react";
import ReactDOM from "react-dom";

// 화면을 끄거나 새로고침 전( beforeunload ) 정말 끌건지 확인하기
const usePreventLeave = () => {
  const listener = e => {
    console.log(e)
    e.preventDefault(); // beforeunload.preventDefault()
    e.returnValue = ""; // beforeunload 를 이벤트로 받을 때 그냥 써야함, 크롬의 문제
  };
  // {enablePrevent}가 onClick으로 들어오면 beforeunload 이벤트를 모니터해서 listener실행
  // beforeunload : window가 닫히기 전에 실행
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  // {unablePrevent}가 onClick으로 들어오면 beforeunload 이벤트를 없애고 listener실행
  const disablePrevent = () =>
      window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
      <div className="App">
        <button onClick={enablePrevent}>Protect</button>
        <button onClick={disablePrevent}>Unprotect</button>
      </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);