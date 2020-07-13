import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

// useNetwork : navigator가 online 또는 offline이 되는 것을 막아줌
const useNetwork = onChange => {
  // navigator.onLine : 네트워크 상태(온/오프라인)를 boolean으로 알려줌
  const [status, setStatus] = useState(navigator.onLine || true);
  const handleChange = () => {
    if (onChange && typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    // conponentWillMount 일때, 이벤트를 지워주어야한다.
      // TODO : useEffect 안에 아래 익명함수로 넣는 이유 이해하기
        // return () => {} 익명함수를 리턴하면 해결된다. 니꼬는 왜 return 하지 않았을까..?
        // useEffect의 return값을 설정하면 componentWillUnmount(:컴포넌트가 수명을 다하고 사라질 때 어떤 행동을 하는 것) 역할을 한다.
        // https://medium.com/@krpeppermint100/js-useeffect%EB%A5%BC-%ED%86%B5%ED%95%9C-react-hooks%EC%9D%98-lifecycle-%EA%B4%80%EB%A6%AC-3a65844bcaf8
    //() => {
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []); // 오류방지를 위해 dependency 비우기 : 어떠한 state가 변하더라도 컴포넌트를 re-render하지 않겠다.
  return status;
};

const App = () => {
  const handleNetworkChange = online => {
    console.log(online ? "we just went online" : "we are offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
      <div className="App">
        <h1>{onLine ? "online" : "offline"}</h1>
      </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
