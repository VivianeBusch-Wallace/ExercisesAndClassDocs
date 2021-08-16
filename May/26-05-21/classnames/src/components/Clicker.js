import { useState } from "react";

function Clicker() {
  const [userInput, setUserInput] = useState("");
  const [click, setClicks] = useState(0);

  function handleChange(e) {
    setUserInput(e.target.value.trim());
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  function increment() {
    setClicks(click + 1);
    console.log("hi");
  }
  function decrement() {
    setClicks((prevState) => prevState - 1);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={handleChange} />
        <input type="submit" value="add" />
      </form>
      <br />
      you clicked {click} times;
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Clicker;
