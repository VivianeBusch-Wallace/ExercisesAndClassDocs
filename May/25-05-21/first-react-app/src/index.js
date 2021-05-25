import React from "react";
import ReactDOM from "react-dom";

import App from "./App"; //this is App.js

import "./css/style.css"; // this is the css for the page

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
