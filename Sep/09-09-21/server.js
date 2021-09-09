require("dotenv").config();

const app = require("./app");

const http = require("http");

const PORT = process.env.PORT || 5000;

// const server = http.createServer(app);
// server.listen(
//   PORT,
//   console.log(`Server is listening on http://localhost:${PORT}`)
// );

http
  .createServer(app)
  .listen(PORT, console.log(`Server is listening on http://localhost:${PORT}`))
  .on("error", (e) => {
    if (e.code === "EADDRINUSE") {
      console.log("PORT in use, retrying ...");
      setTimeout(() => {
        http.Server.close();
        http.Server.listen(
          PORT,
          console.log(`Server is listening on http://localhost:${PORT}`)
        );
      }, 1000);
    }
  });
