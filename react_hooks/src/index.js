import React, { useRef } from "react";
import ReactDOM from "react-dom";

// 이벤트를 받아 전체화면으로 만들기
const useFullscreen = callback => {
  const element = useRef();

  const runCb = isFull => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    console.log(document.exitFullscreen);
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const { element, triggerFull, exitFull } = useFullscreen();
  return (
      <div className="App" style={{ height: "1000vh" }}>
        <img
            ref={element}
            src="https://images.unsplash.com/photo-1593642703055-4b72c180d9b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            width="300"
            alt="fullScreenImg"
            onClick={exitFull}
        />
        <button onClick={triggerFull}>FULL SCREEN</button>
      </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
