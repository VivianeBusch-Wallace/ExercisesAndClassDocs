import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Counter /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <h1>Redux Practice App</h1>
      </header>
      <main>
        <form>
          <ul>
            <li>
              <label for="username">Username: </label>
              <input type="text" id="username" />
            </li>
            <li>
              <label for="position">Position: </label>
              <input type="text" id="position" />
            </li>
          </ul>
          <button type="submit" class="form_button">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
