function Subtract({ stateForSubtracting }) {
  return (
    <div>
      <button onClick={() => stateForSubtracting((prevState) => prevState - 1)}>
        -
      </button>
    </div>
  );
}

export default Subtract;
