const mongoose = require('mongoose');

const GirlsGrtwelveRoomsSchema = new mongoose.Schema({
    personNo: { type: Number, required: true },
    roomNo: { type: Number, required: true },
    isStatus: { type: Boolean, default: false }
});

module.exports = mongoose.model('GirlsGrtwelveRooms', GirlsGrtwelveRoomsSchema);
