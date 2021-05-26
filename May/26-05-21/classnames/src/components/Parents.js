// import children

function Daddy() {
  return (
    <div className="parent-daddy">
      <p>This is Daddy.</p>
      <p>Daddy's children are:</p>
      <ul className="daddys-children"></ul>
    </div>
  );
}

function Mommy() {
  return (
    <div className="parent-mommy">
      <p>This is Mommy.</p>
      <p>Mommy's children are:</p>
      <ul className="mommys-children"></ul>
    </div>
  );
}

export { Daddy, Mommy };
