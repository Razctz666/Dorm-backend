const mongoose = require('mongoose');

const BoysBreightRoomsSchema = new mongoose.Schema({
    personNo: { type: Number, required: true },
    roomNo: { type: Number, required: true },
    isStatus: { type: Boolean, default: false }
});

module.exports = mongoose.model('BoysBreightRooms', BoysBreightRoomsSchema);
