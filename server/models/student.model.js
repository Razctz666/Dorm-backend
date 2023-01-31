const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    roomCategory : { type: String, required: true },
    roomNo: { type: Number, String, required: true },
    personNo: { type: Number, String, required: true },
    surName: { type: String, required: true },
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },

    gender: { type: String, required: true, enum: ['male', 'female']},
    mobileNo: { type: Number, required: true },

    email: { type: String, required: true, match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email']},

    currentAdress: { type: String, required: true },
    collegeName: { type: String, required: true },
    isStatus: { type: Boolean, required: true, default: true }, 
    joinDate: { type: Date, required: true, default: Date.now}
});

module.exports = mongoose.model('Student', StudentSchema);
