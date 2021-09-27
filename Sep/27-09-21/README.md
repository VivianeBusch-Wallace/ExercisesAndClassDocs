npm init -y
echo "PORT=5000\nDB_URL=mongodb://localhost:27017/users" > .env
echo "node_modules/" > .gitignore
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

we now have react inside a folder called client
react will have its own package.json and .gitignore etc.

in your package.json we need to add the following scripts
"start": "node server/server.js",
"server": "nodemon server/server.js",
"client": "npm start --prefix client",
"dev": "concurrently \"npm run server\" \"npm run client\""

inside React package.json: add "proxy": "http://localhost:5000" after browsersList
