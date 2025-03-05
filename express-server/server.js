const express = require("express");
const path = require("path");

const server = express();
const PORT = 3000;

server.use(express.static("./public/"));

server.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./index.html"));
});

server.get("/about", (req, res) => {
  res.send("about page");
});

//error page
server.get("*", (req, res) => {
  res.status(404).send("error page");
});

server.listen(PORT, () => {
  console.log(`server runngin in port: ${ PORT }`);
});
