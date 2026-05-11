const express = require("express");
const app = express();

const itemRoutes = require("./API/Item/ItemRoutes")

app.use(express.json());

app.use("/items",itemRoutes);

module.exports = app;