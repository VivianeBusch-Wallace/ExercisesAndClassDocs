import React, { useState } from "react";

function Subtract({ stateForSubtracting, setLog, log }) {
  //   const [log, setLog] = useState(false);
  console.log(log);
  const changeLog = () => {
    log ? setLog(false) : setLog(true);
  };

  return (
    <div>
      <button onClick={() => stateForSubtracting((prevState) => prevState - 1)}>
        -
      </button>
      <button onClick={changeLog}>Change state of Log</button>
      <p>State of log is: {log.toString()}</p>
    </div>
  );
}

export default Subtract;
