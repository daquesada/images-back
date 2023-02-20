const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");
const { errorHandlerMiddleware } = require("./middlewares");

app.use(cors({ origin: process.env.CORS_ORIGIN }));

app.use(express.json());
app.use("/v1", routes);

app.use(errorHandlerMiddleware);

module.exports = app;
