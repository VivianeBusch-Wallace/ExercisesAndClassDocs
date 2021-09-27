Step by step:

npm init -y

echo "PORT=5000\nDB_URL=mongodb://localhost:27017/users" > .env

echo "node_modules/" > .gitignore
add .env to gitignore

npm i express
npm i dotenv
npm i morgan
npm i mongoose
npm i bcrypt
npm i cookie-parser
npm i express-session
npm i express-validator
npm i uuid
npm i multer
npm i concurrently

npm i nodemon --save-dev

mkdir server

touch server/server.js server/app.js

mkdir server/models server/controllers

touch server/models/userModel.js

touch server/controllers/userController.js

npx create-react-app client
<< to start react part inside a folder called "client"
clean out react files which are unnecessary
you can delete README inside react

we now have react inside the folder client
react will have its own package.json and .gitignore etc.
everything BE will live in our folder called "server"

in your package.json of our root folder we need to add the following scripts >>

"main": "server/server.js",

"start": "node server/server.js",
<< this is optional, it is mainly for other devs who want to run your app, so that they do not run dry

"server": "nodemon server/server.js",

"client": "npm start --prefix client",
<< --prefix will tell npm start to go inside client and execute

"dev": "concurrently \"npm run server\" \"npm run client\""
<< all commands have to be in double quotes, the \ helps ignore the double quotes, this command line works with the concurrently dependency and combines running react and BE app at the same time

inside React package.json: add "proxy": "http://localhost:5000" after browsersList

now we can go to root in terminal and run:
npm run dev
which will start both BE and React
