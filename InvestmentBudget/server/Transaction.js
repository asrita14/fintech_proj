const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
    user: String,
    item: String,
    price: Number,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Transaction", TransactionSchema);

