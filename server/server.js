const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use("/", express.static(path.resolve(__dirname, "../src")));

app.use(bodyParser.json());

app.listen(1337, () => {
    console.log("Server started http://localhost:1337");
});
