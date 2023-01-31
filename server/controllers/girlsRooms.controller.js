const girlsGroneRooms = require('../models/girlsRooms/girlsGroneRooms.model');
const girlsGrtwoRooms = require('../models/girlsRooms/girlsGrtwoRooms.model');
const girlsGrtreeRooms = require('../models/girlsRooms/girlsGrtreeRooms.model');
const girlsGrfourRooms = require('../models/girlsRooms/girlsGrfourRooms.model');
const girlsGrfiveRooms = require('../models/girlsRooms/girlsGrfiveRooms.model');
const girlsGrsixRooms = require('../models/girlsRooms/girlsGrsixRooms.model');
const girlsGrsevenRooms = require('../models/girlsRooms/girlsGrsevenRooms.model');
const girlsGreightRooms = require('../models/girlsRooms/girlsGreightRooms.model');
const girlsGrnineRooms = require('../models/girlsRooms/girlsGrnineRooms.model');
const girlsGrtenRooms = require('../models/girlsRooms/girlsGrtenRooms.model');
const girlsGrelevenRooms = require('../models/girlsRooms/girlsGrtwelveRooms.model');
const girlsGrtwelveRooms = require('../models/girlsRooms/girlsGrtwelveRooms.model');
const girlsGrthirteenRooms = require('../models/girlsRooms/girlsGrthirteenRooms.model');
const girlsGrfourteenRooms = require('../models/girlsRooms/girlsGrfourteenRooms.model');
const girlsGrfifteenRooms = require('../models/girlsRooms/girlsGrfifteenRooms.model');

async function groneAvailability() {
    let total = await girlsGroneRooms.find({ isStatus: { $eq: false } });
    return total;
}

async function grtwoAvailability() {
    let total = await girlsGrtwoRooms.find({ isStatus: { $eq: false } });
    return total;
}

async function grtreeAvailability() {
    let total = await girlsGrtreeRooms.find({ isStatus: { $eq: false } });
    return total;
}

async function grfourAvailability() {
    let total = await girlsGrfourRooms.find({ isStatus: { $eq: false } });
    return total;
}

async function grfiveAvailability() {
    let total = await girlsGrfiveRooms.find({ isStatus: { $eq: false } });
    return total;
}

async function grsixAvailability() {
    let total = await girlsGrsixRooms.find({ isStatus: { $eq: false } });
    return total;
}

async function grsevenAvailability() {
    let total = await girlsGrsevenRooms.find({ isStatus: { $eq: false } });
    return total;
}

async function greightAvailability() {
    let total = await girlsGreightRooms.find({ isStatus: { $eq: false } });
    return total;
}

async function grnineAvailability() {
    let total = await girlsGrnineRooms.find({ isStatus: { $eq: false } });
    return total;
}

async function grtenAvailability() {
    let total = await girlsGrtenRooms.find({ isStatus: { $eq: false } });
    return total;
}

async function grelevenAvailability() {
    let total = await girlsGrelevenRooms.find({ isStatus: { $eq: false } });
    return total;
}

async function grtwelveAvailability() {
    let total = await girlsGrtwelveRooms.find({ isStatus: { $eq: false } });
    return total;
}

async function grthirteenAvailability() {
    let total = await girlsGrthirteenRooms.find({ isStatus: { $eq: false } });
    return total;
}

async function grfourteenAvailability() {
    let total = await girlsGrfourteenRooms.find({ isStatus: { $eq: false } });
    return total;
}

async function grfifteenAvailability() {
    let total = await girlsGrfifteenRooms.find({ isStatus: { $eq: false } });
    return total;
}

async function updateGrone(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await girlsGroneRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateGrtwo(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await girlsGrtwoRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateGrtree(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await girlsGrtreeRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateGrfour(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await girlsGrfourRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateGrfive(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await girlsGrfiveRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateGrsix(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await girlsGrsixRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateGrseven(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await girlsGrsevenRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateGreight(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await girlsGreightRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateGrnine(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await girlsGrnineRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateGrten(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await girlsGrtenRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateGreleven(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await girlsGrelevenRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateGrtwelve(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await girlsGrtwelveRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateGrthirteen(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await girlsGrthirteenRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateGrfourteen(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await girlsGrfourteenRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateGrfifteen(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await girlsGrfifteenRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}


module.exports = {
    groneAvailability,
    grtwoAvailability,
    grtreeAvailability,
    grfourAvailability,
    grfiveAvailability,
    grsixAvailability,
    grsevenAvailability,
    greightAvailability,
    grnineAvailability,
    grtenAvailability,
    grelevenAvailability,
    grtwelveAvailability,
    grthirteenAvailability,
    grfourteenAvailability,
    grfifteenAvailability,
    updateGrone,
    updateGrtwo,
    updateGrtree,
    updateGrfour,
    updateGrfive,
    updateGrsix,
    updateGrseven,
    updateGreight,
    updateGrnine,
    updateGrten,
    updateGreleven,
    updateGrtwelve,
    updateGrthirteen,
    updateGrfourteen,
    updateGrfifteen,
};