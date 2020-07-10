import React, {useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const useClick = onClick =>{
  // u
  const element = useRef();
  // useEffect( 함수인자 ) 랜더 후 실행
  useEffect(()=>{
    if(element.current){
      element.current.addEventListener('click', onClick);
    }
  })
// return element, 즉 ref요소를 return 해야 reference 연결이 된다.
  return element;
}
const App = () => {
  const sayHello = () => console.log('sayHello')
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>hi</h1>

    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

