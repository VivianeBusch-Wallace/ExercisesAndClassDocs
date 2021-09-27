import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [users, setUsers] = useState([]);

  const getData = () => {
    fetch("/user")
      .then((result) => result.json())
      .then((data) => setUsers(data));
    // .then((data) => console.log("from fetch: ", data));
    // .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
    console.log("useEffect Hello");
  }, []);

  // getData(); // fatal, because looping

  console.log(uuid());
  console.log(uuid());

  const userArr = users.map((user, i) => <li key={uuid()}>{user}</li>);

  console.log(users);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <div className="users-list-wrapper">
          <ul>{userArr}</ul>
        </div>
      </main>
    </div>
  );
}

export default App;
