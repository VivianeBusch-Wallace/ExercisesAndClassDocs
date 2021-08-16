import { useState } from "react";

function Form() {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState("");

  function changeHandel(e) {
    console.log(e.target.value);
    setUserInput(e.target.value.trim());
  }
  function add(e) {
    e.preventDefault();
    // setUserInput(e.target.value); MAYBE?
  }
  return (
    <div>
      <form onSubmit={add}>
        <input
          type="text"
          value={userInput}
          onChange={changeHandel}
          placeholder="type something"
        />
        <input type="submit" value="Save to list" />
      </form>
      {userInput}
      <p>{userInput}</p>
    </div>
  );
}

export default Form;
