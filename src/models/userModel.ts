const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    record: { type: String, required: true },
    date: {
        type: Number,
        default: Date.now,
    },
});

const model = mongoose.model("userModel", userSchema);

module.exports = model;
