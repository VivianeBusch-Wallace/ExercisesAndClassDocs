---
Step 1:
go to your github account
create new repo
follow the steps of connecting your repo with your computer as usual

Step 2:
open your directory that you want to work with (main directory) in your IDE (for example VSC)
open first terminal
make sure you have npm installed or install it now ("npm install")
make sure the terminal opened the main directory

Step 3:
run npm from first terminal by typing "npm init" and click enter OR "npm init -y" + enter and skip the next step

for all questions it is asking your now click enter (you can change these later in json file)
this created a package json file in your directory

open "package.json" file and enter all your scripts:
""start": "run-p watch watch:styles",
    "build": "run-s clean clean:styles build:styles copy",
    "deploy": "run-s build publish",
    "build:styles": "sass src/scss:src/styles",
    "watch": "live-server src",
    "watch:styles": "sass src/scss:src/styles --watch",
    "clean": "rm -rf dist",
    "clean:styles": "rm -rf src/styles",
    "copy": "mkdir dist && rsync -avr --exclude=\"/scss\" src/ dist",
    "publish": "gh-pages -d dist""
into the script object
delete the test script object ""test": "echo \"Error: no test specified\" && exit 1"", make any other changes as needed, save, close

install packages from terminal 1: "npm i --save-dev gh-pages sass npm-run-all live-server" ("npm i --save-dev" or "npm install --save-dev" + package names, dev stands for development)
package-lock.json and node modules have been created inside your main directory

in your main directory create a ".gitignore" file and put in your "node_modules" (so that when you push your github the node modules won't be shared)
here you might as well prematurely add "dist" and "src/styles" into the ".gitignore" file to save two extra steps, always make sure the spelling is the same and save

inside your main directory create a directory called "src", make sure the spelling is the same and correct!

inside it create your "index.html" (don't name this something else!)

and also create a new directory "scss" inside your main directory, make sure spelling is correct (not capitalized!) and has the same name (if the names are not the same it won't work)

inside "scss" create file "main.scss", make sure spelling is correct has to be same name!

git add . && git commit -m "......commit message......"

terminal 1: "npm start" (this runs the start script in your json file and starts your client server? node modules)
"styles" directory is automatically created with "main.css" and "main.css.map" in it
if you make any changes in your "main.scss" and save, you can see them in your "main.css" (but do not change anything inside your CSS file! From now on only work from scss in your src/scss directory)

link up your "index.html" with your "styles/main.css" from your scss/styles folder (Not from dist folder! And not the scss file!)

after "npm start" don't change anything in the first terminal, this one is for the client server (???), except for when you change files or directorynames etc., installing and updating packages, you need to restart the liveserver


open a new terminal, but don't close your first one! (first terminal watches all the changes)
terminal 2: "npm run build"
"dist" folder is created inside your main directory (dist stands for distributable, not distribution. It is the directory that once everything has been compiled, gulped, transpiled, assembled and produced from all the other sources and files and trinkets etc.. this is what you want to distribute or indicate to others that it is the distributable!)
inside the "dist" directory is a copy of your stuff, don't change/touch!
any style changes you make now in your html file will be visible in your browser live, see how the info in your terminal 1 changes?

terminal 2: "npm run deploy", this automatically creates a second branch "gh-pages" in your git hub repo

everytime you change sth run "npm run build" (updates/creates dist directory) and then "npm run deploy" (updates/creates gh-pages on github)

also ignore dist directory in gitignore and src/styles

--

npm init -y means yes with all standard settings (?)

only when you change sth for server, close server, then restart server
What does that mean?

---

The steps explained by Dario:

1. Use command "npm init" in the directory you want to work in
2. Use command "npm i --save-dev gh-pages sass live-server npm-run-all" in the same directory to install needed items
3. delete test scripts in package.json file
4. add to scripts (package.json file) in curly brackets:
   "start": "run-p watch watch:styles",
   "build": "run-s clean clean:styles build:styles copy",
   "deploy": "run-s build publish",
   "build:styles": "sass src/scss:src/styles",
   "watch": "live-server src",
   "watch:styles": "sass src/scss:src/styles --watch",
   "clean": "rm -rf dist",
   "clean:styles": "rm -rf src/styles",
   "copy": "mkdir dist && rsync -avr --exclude=\"/scss\" src/ dist",
   "publish": "gh-pages -d dist"
5. create .gitignore in root/main folder and add node_modules to .gitignore
6. add folder to root/main folder: "src"
7. add "index.html" to "src" folder
8. add folder "scss" to folder "src"
9. add "main.scss" to "scss" folder
10. run "npm start" and "styles" folder gets automatically created with main.css and main.css.map
11. link "main.css" from newly created folder to "index.html" doc
12. Dont use this terminal window anymore, except:
    12.1 Everytime you change files or directorynames, installing and updating packages, you need to restart the liveserver
13. Everytime you make changes and save in main.scss, its content gets automatically transferred to main.css
14. "npm run build" in another terminal-window in the same directory to create gh-pages version or update gh-pages version in /dist folder

---

Also useful info from stackoverflow (https://stackoverflow.com/questions/22842691/what-is-the-meaning-of-the-dist-directory-in-open-source-projects)

"/dist means "distributable", the compiled code/library.
Folder structure varies by build system and programming language. Here are some standard conventions:

src/: "source" files to build and develop the project. This is where the original source files are located, before being compiled into fewer files to dist/, public/ or build/.
dist/: "distribution", the compiled code/library, also named public/ or build/. The files meant for production or public use are usually located here.
assets/: static content like images, video, audio, fonts etc.
lib/: external dependencies (when included directly).
test/: the project's tests scripts, mocks, etc.
node_modules/: includes libraries and dependencies for JS packages, used by Npm.
vendor/: includes libraries and dependencies for PHP packages, used by Composer.
bin/: files that get added to your PATH when installed.
Markdown/Text Files:

README.md: A help file which addresses setup, tutorials, and documents the project. README.txt is also used.
LICENSE.md: any rights given to you regarding the project. LICENSE or LICENSE.txt are variations of the license file name, having the same contents.
CONTRIBUTING.md: how to help out with the project. Sometimes this is addressed in the README.md file.
Specific (these could go on forever):

package.json: defines libraries and dependencies for JS packages, used by Npm.
package-lock.json: specific version lock for dependencies installed from package.json, used by Npm.
composer.json: defines libraries and dependencies for PHP packages, used by Composer.
composer.lock: specific version lock for dependencies installed from composer.json, used by Composer.
gulpfile.js: used to define functions and tasks to be run with Gulp.
.travis.yml: config file for the Travis CI environment.
.gitignore: Specification of the files meant to be ignored by Git."
