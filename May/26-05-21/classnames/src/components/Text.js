// Text is a child of App
function Text(props) {
  console.log(props);
  return (
    <div className="text">
      This is text from the component Text. And this is a prop sent from the
      parent "App": {props.userName}, this person is {props.age} years old.
      <p></p>
    </div>
  );
}
// Text2 is also a child of App
function Text2() {
  return <div>This is Text2.</div>;
}

export { Text, Text2 };
