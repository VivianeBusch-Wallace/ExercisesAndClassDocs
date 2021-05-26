function Text(props) {
  return (
    <div className="text">
      This is text from the component Text. And this is a prop sent from the
      parent "App" {props.userName}
    </div>
  );
}
function Text2() {
  return <div>This is Text2.</div>;
}

export { Text, Text2 };
