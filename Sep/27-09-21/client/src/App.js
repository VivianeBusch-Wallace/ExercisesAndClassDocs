import logo from "./logo.svg";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const getData = () => {
    fetch("/users").then((result) => result.json());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <div className="users-list"></div>
      </main>
    </div>
  );
}

export default App;
