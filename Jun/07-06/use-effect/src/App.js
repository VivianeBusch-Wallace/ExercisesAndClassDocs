import React, { useState, useEffect } from "react";
import Subtract from "./components/Subtract";

function App() {
  const [count, setCount] = useState(0);
  const [log, setLog] = useState(false);

  // useEffect runs after every render >>
  // useEffect(() => {
  //   console.log(
  //     "This is useEffect. It will get triggered with every render because no dependencies."
  //   );
  // });

  // useEffect runs only once after the first render >>
  // useEffect(() => {
  //   console.log(
  //     "This is useEffect. It will get triggered only once after loading page because dependency array is empty."
  //   );
  // }, []);

  // useEffect runs after every change of either states count or log >>
  // useEffect(() => {
  //   console.log(
  //     "This is useEffect. It will get triggered with every change of the states count and log because dependency array has count and log."
  //   );
  // }, [count, log]);

  useEffect(() => {
    document.title = `Your current count is: ${count}`;
  });
  // << "When React renders our component, it will remember the effect we used, and then run our effect after updating the DOM."

  const addOne = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <button onClick={addOne}>+</button>
      <p>{count}</p>
      {/* Substract subtracts one from count and also handles log */}
      <Subtract
        stateForSubtracting={setCount}
        setLog={setLog}
        log={log}
        count={count}
      />
    </div>
  );
}

export default App;

// Exercises >>
// UseEffect more practice, please do every step individually
// Stop useEffect from running on every render << use empty dependency array [] or define dependency [count] or [log] or [count, log], (if dependency is defined useEffect will run whenever the dependency changes)
// Only Run Once, on Mount << empty dependency array []
// Run useEffect on State Change << dependency is dependent on state [count] or [log] or [count, log]
// Run useEffect When a Prop Changes << send a state from parent to child, in child receive prop and import useEffect and make useEffect dependent on those props

// side note:
// we don't need to import useState, if we send setState through the parent to our file
// but useState has to be imported every time we want to set a state on something
