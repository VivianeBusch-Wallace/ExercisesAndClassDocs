import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const getData = () => {
    fetch("/users")
      .then((result) => result.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    getData();
  }, []);

  const userArr = users.map((user, i) => <li key={i}>{user}</li>);

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
