const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    username: { type: String, required: true },
    surname: { type: String, required: true },
    firstname: { type: String, required: true },
    middlename: { type: String, required: true },
    idnumber: { type: String, Number, required: true },
    course: { type: String, Number, required: true },
    citizenship: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    birthday: { type: Date, required: true, default: Date},
    religion: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: Number, required: true  },
    scholar: { type: String, required: true },
    elementary: { type: String, required: true },
    secondary: { type: String, required: true },
    college: { type: String, required: true },
    fathersname: { type: String, required: true },
    mothersname: { type: String, required: true },
    occupation: { type: String, required: true },
    monthly: { type: String, required: true },
    person: { type: String, required: true },
    relationship: { type: String, required: true },
    contacts: { type: String, required: true },
    insertedAt: { type: Date, required: true, default: Date.now}
});

module.exports = mongoose.model('Contact', ContactSchema);
  