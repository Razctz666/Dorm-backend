const boysBroneRooms = require('../models/boysRooms/boysBroneRooms.model');
const boysBrtwoRooms = require('../models/boysRooms/boysbrtwoRooms.model');
const boysBrtreeRooms = require('../models/boysRooms/boysBrtreeRooms.model');
const boysBrfourRooms = require('../models/boysRooms/boysBrfourRooms.model');
const boysBrfiveRooms = require('../models/boysRooms/boysBrfiveRooms.model');
const boysBrsixRooms = require('../models/boysRooms/boysBrsixRooms.model');
const boysBrsevenRooms = require('../models/boysRooms/boysBrsevenRooms.model');
const boysBreightRooms = require('../models/boysRooms/boysBreightRooms.model');
const boysBrnineRooms = require('../models/boysRooms/boysBrnineRooms.model');
const boysBrtenRooms = require('../models/boysRooms/boysBrtenRooms.model');


async function broneAvailability() {
    let total = await boysBroneRooms.find({ isStatus: { $eq: false } });
    // console.log(total);
    return total;
}

async function brtwoAvailability() {
    let total = await boysBrtwoRooms.find({ isStatus: { $eq: false } });
    return total;
}

async function brtreeAvailability() {
    let total = await boysBrtreeRooms.find({ isStatus: { $eq: false } });
    return total;
}

async function brfourAvailability() {
    let total = await boysBrfourRooms.find({ isStatus: { $eq: false } });
    return total;
}

async function brfiveAvailability() {
    let total = await boysBrfiveRooms.find({ isStatus: { $eq: false } });
    return total;
}

async function brsixAvailability() {
    let total = await boysBrsixRooms.find({ isStatus: { $eq: false } });
    return total;
}

async function brsevenAvailability() {
    let total = await boysBrsevenRooms.find({ isStatus: { $eq: false } });
    return total;
}

async function breightAvailability() {
    let total = await boysBreightRooms.find({ isStatus: { $eq: false } });
    return total;
}

async function brnineAvailability() {
    let total = await boysBrnineRooms.find({ isStatus: { $eq: false } });
    return total;
}

async function brtenAvailability() {
    let total = await boysBrtenRooms.find({ isStatus: { $eq: false } });
    return total;
}


async function updateBrone(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;

    return await boysBroneRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateBrtwo(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await boysBrtwoRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateBrtree(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await boysBrtreeRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateBrfour(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await boysBrfourRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateBrfive(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await boysBrfiveRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateBrsix(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await boysBrsixRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateBrseven(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await boysBrsevenRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateBreight(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await boysBreightRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateBrnine(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await boysBrnineRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateBrten(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await boysBrtenRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

module.exports = {
    broneAvailability,
    brtwoAvailability,
    brtreeAvailability,
    brfourAvailability,
    brfiveAvailability,
    brsixAvailability,
    brsevenAvailability,
    breightAvailability,
    brnineAvailability,
    brtenAvailability,
    updateBrone,
    updateBrtwo,
    updateBrtree,
    updateBrfour,
    updateBrfive,
    updateBrsix,
    updateBrseven,
    updateBreight,
    updateBrnine,
    updateBrten
};