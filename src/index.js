import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
/* import App from './App';
import reportWebVitals from './reportWebVitals'; */

function formatName(user) {
  if (user) {
    return user.firstName + " " + user.lastName;
  }
  return "stranger";
}

const user = {
  firstName: "Han",
  lastName: "Solo",
  titleColor: "blue",
};

/* const name = "Han Solo";
const element = <h1>1 + 1 = {1 + 1}</h1>; */

const element = (
  <h1 style={{ color: user.titleColor }}>Hello, {formatName(user)}</h1>
);

ReactDOM.render(
  element,
  /* <React.StrictMode>
    <App />
  </React.StrictMode>, */
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* reportWebVitals(); */
