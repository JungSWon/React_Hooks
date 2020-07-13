import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useHover = onHover => {
  if (typeof onHover !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
  });
  return element;
};

const App = () => {
  const sayHello = () => console.log("HELLO THERE HOOK HOOK HOOK!");
  const greeting = useHover(sayHello);
  return (
      <div className="App">
        <h1 ref={greeting}>Hello Yay</h1>
      </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
