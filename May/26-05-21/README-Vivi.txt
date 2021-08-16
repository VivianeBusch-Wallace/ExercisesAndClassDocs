after react don't start npm start yet until sass is loaded

first npm i node-sass
let it download
create sass directory
add main.scss into sass folder
import sass file into index.js
npm start

you can pass information from parent to child
this is the only way to pass properties in react

how to pass data from child to parent:
. in the parent file declare and initialize a variable, ex.: let name = "Hadi";
. add the variable to your child component inside the return, ex.: <Text userName={name} /> (Text is a child of App)
. go into child file, pass "props" as an argument into the function you want to use the data with, ex.:
function Text(props) {
return (

<div className="text">
This is text from the component Text. Text is a child of App.
</div>
);
}
. add the property where wanted like this:{props.userName}
ex.:
function Text(props) {
  return (
    <div className="text">
      This is text from the component Text. And this is a prop sent from the
      parent "App" {props.userName}
    </div>
  );
}
. don't forget curly brackets!

to comment in react:
put it into curly brackets and then put // comment or /_comment_/ inside, like this:
{/_ This is how to write a comment in React return _/} (the \_ are stars)
{
// This is how to write a comment in React return
}

Always delete your node modules of old projects because it takes up a lot of space and you can always reinstall them with npm!

React Hooks like useState:
first import hooks from react like so:
import {useState} from "react";
DO NOT FORGET THIS!
useState is an API (Application Programming Interface)
useState is the hook's name,

use it in the function like so:
function App() {
const [userInput, setUserInput] = useState("");
}
in pseudo language:
function App() {
const [nameOfState, setNameOfState] = useState(initialValue);
}
initialValue can be "", [], {}, 0 (string, array, object, number), even with something inside
setNameOfState is a function, which uses camel case

Hooks don’t work inside classes.




Sidenote on git from group project:
GitHub work flow for all after every new pull requests being merged
$ git checkout main 
$ git pull
$ git checkout <your branch>
$ git merge main