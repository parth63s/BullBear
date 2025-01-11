const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
    name: String,
    price: Number,
    qty: String,
    mode: String,
})

module.exports = { OrdersSchema };