const mongoose = require('mongoose');

const BoysBroneRoomsSchema = new mongoose.Schema({
    personNo: { type: Number, String, required: true },
    roomNo: { type: Number, String, required: true },
    isStatus: { type: Boolean, default: false }
});

module.exports = mongoose.model('BoysBroneRooms', BoysBroneRoomsSchema);
