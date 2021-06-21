import React, { useState, useEffect, useRef } from "react";

function App() {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  const inputRef = useRef();
  const prevName = useRef("");

  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1;
  // });

  useEffect(() => {
    // renderCount.current = renderCount.current + 1;
    prevName.current = name;
  }, [name]);

  // useState rerenders every time state changes
  // useRef does not rerender every time, but it stores the information, however it does not notify anyone about it

  // from Hadi
  const [counter, setCounter] = React.useState(0); // you can use useState like this without importing it first
  const [like, setLike] = React.useState(false);
  const userTextInput = useRef(null);
  const count = useRef(0);

  const changeBg = () => (userTextInput.current.style.backgroundColor = "red");
  const getMe = () => {
    console.log(userTextInput);
    userTextInput.current.focus();
  };

  return (
    <div className="App">
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>
        The name is {name}and before it was {prevName.current}
      </p>

      <p>Rendering {renderCount.current} times.</p>

      {/* from Hadi */}
      <input type="text" ref={userTextInput} />

      <button onClick={getMe}>Get me focused</button>

      <button onClick={changeBg}>Change Bg</button>

      <h6>Counter with Ref, No Re-render</h6>
      <button onClick={() => count.current++}>{count.current}</button>
      {console.log(count.current)}

      <h6>Counter with State</h6>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      <button onClick={() => setLike(!like)}>{like ? "👍🏻" : "👎🏻"}</button>
    </div>
  );
}

export default App;

// Notes
//
