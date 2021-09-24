import React, { useState } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { useDispatch } from "react-redux";
import { addNewUser } from "./store/actions/newUserAction";

function App() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch(); // why do we have to do it like this? why cannot use directly after importing?
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddUser = () => {
    let newUser = { user: input, id: Date.now() };
    console.log(newUser);
    dispatch(addNewUser(newUser));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Practice App</h1>
      </header>
      <main>
        <form>
          <ul>
            <li>
              <label for="username">Username: </label>
              <input type="text" id="username" onChange={handleChange} />
            </li>
            {/* <li>
              <label for="position">Job position: </label>
              <input type="text" id="position" onChange={handleChange} />
            </li> */}
            <li>
              <input
                type="button"
                value="Submit"
                class="form_button"
                onClick={handleAddUser}
              />
            </li>
          </ul>
        </form>
      </main>
    </div>
  );
}

export default App;

// Notes
/*
From inside the jsx part >>
<img src={logo} className="App-logo" alt="logo" />
<Counter />
<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

*/
