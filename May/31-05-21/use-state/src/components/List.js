import { sub } from "../helpers";
import Item from "./Item";
const List = (props) => {
  return (
    <div>
      {sub(44, 3)}
      <Item print={props.print} />
      {/* props.print has no () because it is only passed to the child not executed here */}
    </div>
  );
};
export default List;
