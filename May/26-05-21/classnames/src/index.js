import React from "react";
import ReactDOM from "react-dom";

// importing biggest components
import App from "./App";
import Grandparent from "./GrandparentComponent";
// << for understanding the parent child relationship between jsx elements better
// I created another parent element on the same level as App
import Form from "./Form";

// importing Sass
import "./sass/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Grandparent />
    <hr></hr>
    <Form />
  </React.StrictMode>,
  document.getElementById("root")
);
