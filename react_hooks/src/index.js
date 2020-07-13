import React from "react";
import ReactDOM from "react-dom";

// OS에 뜨는 브라우저 알람
// notification API : https://developer.mozilla.org/en-US/docs/Web/API/notification
const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNoif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNoif;
};

const App = () => {
  const triggerNotif = useNotification("BBUUUUUUUUU!!", { body: "Ewwwwww.." });
  return <button onClick={triggerNotif}>NOTICE</button>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
