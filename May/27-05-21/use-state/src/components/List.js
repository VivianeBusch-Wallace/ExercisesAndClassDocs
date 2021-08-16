import { useState } from "react";

const List = (props) => {
  console.log(props);
  // props is always an object
  //   console.log(props.setList);
  // this is a function

  const [userInput, setUserInput] = useState("");
  // << use useState
  // make the new input to setUserInput >>
  function changeHandle(e) {
    // console.log(e.target.value);
    setUserInput(e.target.value);
  }
  function submitHandle() {
    e.preventDefault();
    //trim
    props.setList((previousState) => [
      ...previousState,
      // << to keep the old todos, not replace them and ...
      { id: previousState.length, title: userInput.trim(), done: false },
      // << to add new todo
    ]);
    setUserInput("");
    // to empty out my input
  }
  return (
    <form onSubmit={submitHandle}>
      <input type="text" value={userInput} onChange={changeHandle} />
      <input type="submit" value="Save" />
    </form>
  );
};
