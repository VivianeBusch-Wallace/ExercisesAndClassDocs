function ToDos(props) {
  const userTodos = props.list.map((ToDo, i) => (
    <li key={i}>
      <input
        type="checkbox"
        defaultChecked={ToDo.done}
        onChange={() => props}
      />
      {/* onChange is a function that allows us to get around the rule of not being able to pass from child to parent */}
      {ToDo.title}
      <i
        onClick={() => {
          console.log(toDo.id);
          props.check(toDo.id);
        }}
      />
    </li>
  ));
  return <ul>{userTodos}</ul>;
}

export default ToDos;
