const Item = (props) => {
  return <div>Hey, I am child of a child {props.print()}</div>;
  //   props.print comes from the grandparent
};
export default Item;
