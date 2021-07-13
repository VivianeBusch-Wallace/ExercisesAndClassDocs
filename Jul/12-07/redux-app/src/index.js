import React from "react";
import ReactDOM from "react-dom";
import "./sass/main.scss";
import App from "./App";
// step 3
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";

// step 4
const store = createStore(
  allReducers, // << first argument (not optional)
  {
    // second argument: all the initial values (not optional) (this part is like the useState hook, useState(initial value) for both counter and userName)>>
    counter: 0,
    userName: "Hadi",
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // << this is the connection to the extension in chrome for redux, it has to be where you create the store, it is optional
);

// step 5
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// npm i react-redux
// << to install redux, then create redux files: actions, reducers
// context is a child of redux
// redux is a state management api/library for js apps
// can be used with react, vue, angular, vanilla js
// you can use it also in other languages (unlike usecontext)?
// alternatives to redux are: flux (by facebook, redux was inspired by flux, but redux is easier), MobX
// each component needs to use store
//

// old way:
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
