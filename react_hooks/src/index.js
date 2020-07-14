import React from "react";
import ReactDOM from "react-dom";
import useAxios from "./useAxios";

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "yts.am/api/v2/list_movies.json"
  });
  console.log(
      `loading:${loading}\n error:${error}\n data:${JSON.stringify(data)}\n`
  );
  return (
      <div className="App">
        <h1>{data && data.status}</h1>
      </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
