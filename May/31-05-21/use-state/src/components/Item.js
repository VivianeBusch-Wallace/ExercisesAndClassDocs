const Item = (props) => {
  return <div>Hey, I am child of a child {props.print()}</div>;
  //   props.print comes from the grandparent because it is executed here it has ()
};
export default Item;
