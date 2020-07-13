import React from "react";
import ReactDOM from "react-dom";

// 이벤트 실행을 일단 막고, 컨펌 후 실행
const useConfirm = (message='', onCallback, onCancel) => {
  if (typeof onCallback && onCallback !== "function") {
    return;
  }
  const confirmAction = () => {
    // confirm in JS : 확인창 띄우기
    if (confirm(message)) {
      onCallback();
    } else {
      // confirm에서 취소를 눌렀을때
      onCancel();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("DEL YOUR WORLD, FREEDOM YAYAY");
  const abort = () => console.log("Aborted..");
  const confirmDelete = useConfirm("ARE YOU SURESURE?", deleteWorld, abort);
  return (
      <div className="App">
        <h1>Hey</h1>
        <button onClick={confirmDelete}>Delete the world</button>
      </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
