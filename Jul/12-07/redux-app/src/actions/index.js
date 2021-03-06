// step 1
const increment = () => {
  return {
    type: "INCREMENT", // object property type, pls always add this
  };
};
const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
// if you have a value to receive then always add payload
const changeName = (name) => {
  return {
    type: "CHANGE_NAME",
    payload: name,
  };
};

export { increment, decrement, changeName };
