import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const content = [
  {
    tab: "Section 1",
    content: "This is the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "This is the content of the Section 2"
  }
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  //  useState()의 첫번째 인자는 state, 두번째인자는 setstate함수인듯하다
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  console.log(currentItem, changeItem);
  return (
      <div className="App">
        <h3>hello</h3>
        {content.map((sec, index) => (
            <button onClick={() => changeItem(index)}>{sec.tab}</button>
        ))}
        <div> {currentItem.content} </div>
      </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
