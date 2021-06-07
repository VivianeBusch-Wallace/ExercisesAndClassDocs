import React, { useEffect } from "react";

function Subtract({ stateForSubtracting, setLog, log, count }) {
  //   const [log, setLog] = useState(false);
  console.log(log);
  const changeLog = () => {
    log ? setLog(false) : setLog(true);
  };
  useEffect(() => {
    console.log(
      "This is useEffect. useEffect depends on props here because useEffect is coming from the child, which received props.count and props.log. This useEffect will get triggered with every change of the states count and log because dependency array has count and log. Run useEffect When a Prop Changes >> answered here because count and log were sent through parent"
    );
  }, [count, log]);

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
