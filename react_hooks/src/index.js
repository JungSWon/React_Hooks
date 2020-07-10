import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// useEffect는
// React의 ComponentWillUnmount , ComponentDidMount, ComponentWillUpdate와 유사하다.
// useEffect의 첫번째 인자는 function으로써의 effect,
// 두번째인자 deps를 쓴다면(if present,) deps리스트에 있는 값일 때만 값이 변하도록 한다.
const App = () => {
  const sayHello = () => console.log("hello!");
  const [num, setNum] = useState(0);
  const [aNum, setAnum] = useState(0);
  // 변수 num 상태값이 바뀔 때만 sayHello()  하겠다!
  useEffect(sayHello, [num]);

  return (
      <div className="App">
        <div>Hi</div>
        <button onClick={() => setNum(num + 1)}>num : {num}</button>
        <button onClick={() => setAnum(aNum + 1)}>aNum : {aNum}</button>
      </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
