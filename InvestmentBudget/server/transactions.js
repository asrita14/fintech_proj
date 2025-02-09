const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

// POST: Add a new transaction
router.post("/add", async (req, res) => {
    try {
        const { user, item, price } = req.body;
        const transaction = new Transaction({ user, item, price });
        await transaction.save();
        res.json({ success: true, transaction });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// GET: Fetch all transactions
router.get("/", async (req, res) => {
    const transactions = await Transaction.find();
    res.json(transactions);
});

module.exports = router;
