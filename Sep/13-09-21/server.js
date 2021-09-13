require("dotenv").config();
const app = require("./app");

const server = require("http").createServer(app);
server.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
