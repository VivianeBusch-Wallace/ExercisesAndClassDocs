// all functions have to be capitalized for react to distinguish jsx components from non-react files
function App() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>This is a paragraph.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>This is h1</h1>
      {console.log("Hi!")}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name"></input>
      </form>
    </div>
  );
}
// these look like html code but they are not
// see how html class is actually called className here!
// every repetitive element needs a key="", non-repetitive keys don't need a key

export default App;
// you need default, if not then use curly brackets etc.

// never mix react hooks and components (functions)
// you will always need a wrapper in your return!!!
// if you don't want to have opening and closing tag, you can combine it into one, but all components need to be closed
// example: <App />
// whenever you write JS code inside the return, then you will need curly brackets!!
// example: {console.log("Hi!")}

// images should be saved in public, not in src! But it is still techically in ""./img/image.jpeg"
