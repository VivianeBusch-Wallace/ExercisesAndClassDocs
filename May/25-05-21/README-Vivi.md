# First Day on React

Detailed steps:

1. inside VSC go into the directory into which you want to put your react repository
2. download react through your terminal with:
   npx create-react-app project-name
   (the project name cannot have any capital letters, you will have to do this for every project, the download might take a while)
3. After the download has finished move into your project repository through your terminal. DON'T FORGET THIS!
   cd project-name
4. in your terminal start the npm server (VSC live server will not work): npm start
5. React has created almost everything for you. Delete the files you don't need.
6. work on the project, you can add css/style.css and don't forget to import that into your index.js.
   If you want to add images put the image folder into "public", the source path is still the same, ex.: <img className="pic" src="./img/tree.jpeg" alt="big tree" />

In short:

1. npx create-react-app project-name
2. cd project-name
3. npm start
4. work it, baby

Notes on React:
. "public" is the data for the published version and src is what you work with
. react creates the index.html and index.js from which you will be working from
. some react files might have the file extension .jsx, but .jsx and .js both work in react. More on JSX here: https://reactjs.org/docs/introducing-jsx.html
. except for imports your index.js should only have ReactDOM.render();
. each tag has to have a closing tag!
. inside the return of your function you will always need a wrapper tag for your other tags
. organize your js well, don't forget to export them, and don't forget to import them into your index.js
. all js files for react have to have a capitalized name!
. all functions for react have to have a capitalized name!
. for example when you want to add another component do this: create a new js file for it, inside it put your function and export that function, go inside index.js and import the file and add the tag for your function inside the render in the position you desire
. If you want to add images put the image folder with the images into "public", the source path is still the same, ex.: <img className="pic" src="./img/tree.jpeg" alt="big tree" />
. the tags in react look similar to html tags but there are some differences, for example classes are written with className, ex.: className="App"
. all repetitive elements have to have the attribute key in react, ex.: key="". If they are not repetitive then they don't need a key
. JS code inside your function return is wrapped inside curly brackets in react, ex.: {console.log("Hi!")}
. react understands arrow functions but remember that all functions with events need to be the traditional function
. opening and closing tags can be combined into one, ex.: <App />
. the html tags inside react are called jsx elements

---

To download react to your computer for the project type into terminal:

npx create-react-app projectName

It will say:

Creating a new React app in /home/dci/apps/fbw48/May/25-05-21/first-react-app.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...

added 1937 packages, and audited 1938 packages in 1m

138 packages are looking for funding
run `npm fund` for details

87 vulnerabilities (81 moderate, 6 high)

To address all issues, run:
npm audit fix

Run `npm audit` for details.

Installing template dependencies using npm...

added 32 packages, and audited 1970 packages in 9s

138 packages are looking for funding
run `npm fund` for details

87 vulnerabilities (81 moderate, 6 high)

To address issues that do not require attention, run:
npm audit fix

To address all issues (including breaking changes), run:
npm audit fix --force

Run `npm audit` for details.
Removing template package using npm...

removed 1 package, and audited 1969 packages in 8s

138 packages are looking for funding
run `npm fund` for details

87 vulnerabilities (81 moderate, 6 high)

To address issues that do not require attention, run:
npm audit fix

To address all issues (including breaking changes), run:
npm audit fix --force

Run `npm audit` for details.

Success! Created first-react-app at /home/dci/apps/fbw48/May/25-05-21/first-react-app
Inside that directory, you can run several commands:

npm start
Starts the development server.

npm run build
Bundles the app into static files for production.

npm test
Starts the test runner.

npm run eject
Removes this tool and copies build dependencies, configuration files
and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

cd first-react-app
npm start

Happy hacking!

---

Don't forget to cd into your app before continuing from here!

npm start

Now a page with react inside is opened

public is the folder for what the user will see

src is what we are working with

delete what you don't need, so that you only have what you are using, always keep: index.js, index.html

the react js has to be named with a capitalized character first
the function, too

file ending jsx stands for a react file, but it is the same as js

App.test.js is for testing your application

! never use VSC live server, always use npm start VSC server will not help you

---

in index.js >>

ReactDOM.render(
<React.StrictMode>
<App />
</React.StrictMode>,
(<< this is what you present; )

document.getElementById("root")

(<< this is where you present, see your div for root in html file)
);
