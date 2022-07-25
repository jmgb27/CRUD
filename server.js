require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());

mongoose.connect(
    `mongodb+srv://${process.env.NODE_MONGO_USER}:${process.env.NODE_MONGO_PASS}@cluster0.rvllim4.mongodb.net/?retryWrites=true&w=majority`
);

app.use("/", express.static(path.resolve(__dirname, "src")));

app.use(bodyParser.json());

app.post("/api/create", async (req, res) => {
    const record = req.body;
    console.log(record);
    res.json({ status: "ok" });
});

app.listen(1337, () => {
    console.log("Server started http://localhost:1337");
});
