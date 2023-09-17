const express = require("express");
const morgan = require("morgan");

const itemRouter = require("./routes/itemRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

if (process.env.NODE_ENV === "developement") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.use("/api/v1/items", itemRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
