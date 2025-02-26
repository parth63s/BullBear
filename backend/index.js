require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");
const OrdersModel = require("./model/OrdersModel.js");

const HoldingsModel = require("./model/HoldingsModel.js")
const PositionsModel = require("./model/PositionsModel.js")


const PORT = process.env.PORT || 8080;
const URL = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/allHoldings", async(req, res) => {
    let allHoldings =  await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get("/allPositions", async(req, res) => {
    let allPositions =  await PositionsModel.find({});
    res.json(allPositions);
});

app.get("/allOrders", async(req, res) => {
    let allOrders =  await OrdersModel.find({});
    res.json(allOrders);
});

app.post("/newOrder", async(req, res) =>{
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    newOrder.save();
    res.send("Order saved");
})

app.listen(PORT, () => {
    console.log("App started!")
    mongoose.connect(URL);
    console.log("DB Connected!")
})