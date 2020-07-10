import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const App = () => {
  // useRef() = document.selectById , selectByClassName
  const input = useRef();
  //  useref() 는 current라는 객체를 담는다.(=레퍼런스 대상)
  // current: <input placeholder="lalaa"></input>
  // setTimeout(() => console.log(input), 2000);
  setTimeout(() => input.current.focus(), 2000);
  return (
      <div className="App">
        <input ref={input} placeholder="lalaa" />
      </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
