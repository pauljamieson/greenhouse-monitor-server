const express = require("express");
const { httpResp } = require("./helpers");
const app = express();
const expressWsInst = require("express-ws")(app);
expressWsInst
  .getWss()
  .addListener("connection", (socket, req) => console.log("new connection"));

const wsRouter = require("./routes/ws");
const apiRouter = require("./routes/api");

const PORT = process.env.PORT || "5000";

app.use((req, res, next) => {
  console.log(`Path: ${req.path} , Headers:`);
  console.log(req.headers);
  next();
});

app.use("/ws", wsRouter);
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  console.log("a");
  res.json(httpResp(1, "/", "get"));
});

app.listen(PORT, () =>
  console.log(`Web Server is up and running on port: ${PORT}`)
);
