import React, { useState, useEffect } from "react";
import Subtract from "./components/Subtract";

function App() {
  const [count, setCount] = useState(0);
  const [log, setLog] = useState(false);

  console.log(setLog.value);

  // useEffect loads with every render >>
  // useEffect(() => {
  //   console.log(
  //     "This is useEffect. It will get triggered with every render because no dependencies."
  //   );
  // });

  // useEffect loads only once >>
  // useEffect(() => {
  //   console.log(
  //     "This is useEffect. It will get triggered only once after loading page because dependency array is empty."
  //   );
  // }, []);

  // trigger useEffect with every change of either states >>
  useEffect(() => {
    console.log(
      "This is useEffect. It will get triggered with every change of the states count and log because dependency array has count and log."
    );
  }, [count, log]);

  const addOne = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <button onClick={addOne}>+</button>
      <p>{count}</p>
      {/* Substract subtracts one from count and also handles log */}
      <Subtract stateForSubtracting={setCount} setLog={setLog} log={log} />
    </div>
  );
}

export default App;

// Exercises >>
// UseEffect more practice, please do every step individually
// Stop useEffect from running on every render
// Only Run Once, on Mount
// Run useEffect on State Change
// Run useEffect When a Prop Changes

// side note:
// we don't need to import useState, if we send setState through the parent to our file
// but useState has to be imported every time we want to set a state on something
