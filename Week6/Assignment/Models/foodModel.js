const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    shop: { type:String, required: true }
})

const foodModel = mongoose.model.food || mongoose.model("food", foodSchema);

module.exports = foodModel;