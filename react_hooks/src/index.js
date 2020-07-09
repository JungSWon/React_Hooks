import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// 사용자 input을 업데이트 하는 hook
// + input 값의 유효성을 검사하는 로직
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = e => {
    const {
      target: { value }
    } = e;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  //const maxLen = value => value.length < 10;
  const maxLen = value => !value.includes("@");
  const name = useInput("Mr.", maxLen);
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
