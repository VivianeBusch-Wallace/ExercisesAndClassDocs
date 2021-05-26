import { Text, Text2 } from "./components/Text";
// passing a variable through the parent to a child >>
let name = "Hadi";
// To make an array of list items >>
const namesArr = ["Zain", "Olga", "Nancy"];
const listItems = namesArr.map((name, i) => <li key={i}>{name}</li>);
function App() {
  return (
    <div className="App">
      Hi, I am from React.
      <Text userName={name} age="31" namesArr={namesArr} />
      <Text userName="Norma" age="34" text="As you can see..." />
      <Text />
      {/* This is how to write a comment in React return */}
      {
        // This is how to write a comment in React return
      }
      <Text2 />
      <ul className="mapped-with-variable">{listItems}</ul>
      <ul className="directly-mapped">
        {namesArr.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
