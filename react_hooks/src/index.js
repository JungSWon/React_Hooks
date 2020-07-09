import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// 사용자 input을 업데이트 하는 hook
const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = e => {
    console.log(e.target);
  };
  return { value, onChange };
};

const App = () => {
  const name = useInput("Mr.");
  return (
      <div className="App">
        {/* https://yuddomack.tistory.com/entry/자바스크립트-문법-비구조화-할당 */}
        {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
        <input placeholder="Name" {...name} />
      </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
