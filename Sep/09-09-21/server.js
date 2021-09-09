require("dotenv").config();

const app = require("./app");

const http = require("http");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
server
  .listen(PORT, console.log(`Server is listening on http://localhost:${PORT}`))
  .on("error", (e) => {
    if (e.code === "EADDRINUSE") {
      console.log(e);
      console.log("PORT in use, retrying ...");
      setTimeout(() => {
        server.close(); // see Notes
        server.listen(
          PORT,
          console.log(`Server is listening on http://localhost:${PORT}`)
        );
      }, 1000);
    }
  });
// << if there is the connection error EADDRINUSE because the PORT is already in use, then it will automatically retry to connect on the same PORT after the setTimeout time, this will repeat until it is successfully connected through the PORT

/*
Notes

server.close([callback]) >>
Stops the server from accepting new connections and keeps existing connections. This function is asynchronous, the server is finally closed when all connections are ended and the server emits a 'close' event. The optional callback will be called once the 'close' event occurs. Unlike that event, it will be called with an Error as its only argument if the server was not open when it was closed.


*/
