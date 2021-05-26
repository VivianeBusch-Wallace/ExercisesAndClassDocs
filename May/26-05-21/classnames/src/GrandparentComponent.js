// import children of Grandparent (essentially called Parents)>>
import { Daddy, Mommy } from "./components/Parents";

// Grandparent function with to be inherited data
function Grandparent() {
  return (
    <div className="parent-container">
      <div>This is a grandparent component</div>
      <p>
        Below you can see grandparent's children - "Parents" - and the
        grandparent's grandchildren - "Children".
      </p>
      <Daddy />
      <Mommy />
    </div>
  );
}

// exporting Parent into index.js
export default Grandparent;
