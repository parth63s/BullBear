require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
const URL = process.env.MONGO_URL;

const app = express();

app.listen(PORT, () => {
    console.log("App started!")
    mongoose.connect(URL);
    console.log("DB Connected!")
})