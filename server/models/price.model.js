const mongoose = require('mongoose');

const PriceSchema = new mongoose.Schema({
    girls: { type: Number, required: true },
    boys: { type: Number, required: true },
    foodPackage: { type: Number, required: true },
    electricityBillPerUnit: { type: Number, required: true },
    securityDeposit: { type: String, required: true }
});

module.exports = mongoose.model('Price', PriceSchema);
