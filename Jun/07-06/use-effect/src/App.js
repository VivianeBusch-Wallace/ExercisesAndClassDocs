import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [log, setLog] = useState(false);

  // useEffect loads with every render >>
  // useEffect(() => {
  //   console.log(
  //     "This is useEffect. It will get triggered with every render because no dependencies."
  //   );
  // });

  // useEffect loads only once >>
  useEffect(() => {
    console.log(
      "This is useEffect. It will get triggered only once after loading page because dependency array is empty."
    );
  }, []);

  return <div className="App"></div>;
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
