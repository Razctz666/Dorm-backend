const Student =  require('../models/student.model');
const boysRoomsController = require('./boysRooms.controller');
const girlsRoomsController = require('./girlsRooms.controller');

async function insertStudent(student) {
    // console.log(`saving user to db`, student);
    if(student.gender == "male")
    {
        if(student.roomCategory == "Brone")
            msg = await boysRoomsController.updateBrone(student);
        if(student.roomCategory == "brtwo") 
            msg = await boysRoomsController.updatebrtwo(student);
        if(student.roomCategory == "Brtree")
            msg = await boysRoomsController.updateBrtree(student);
        if(student.roomCategory == "Brfour")
            msg = await boysRoomsController.updateBrfour(student);
        if(student.roomCategory == "Brfive")
            msg = await boysRoomsController.updateBrfive(student);
        if(student.roomCategory == "Brsix")
            msg = await boysRoomsController.updateBrsix(student);
        if(student.roomCategory == "Brseven")
            msg = await boysRoomsController.updateBrseven(student);
        if(student.roomCategory == "Breight")
            msg = await boysRoomsController.updateBrseight(student);
        if(student.roomCategory == "Brnine")
            msg = await boysRoomsController.updateBrsnine(student);
        if(student.roomCategory == "Brten")
            msg = await boysRoomsController.updateBrsten(student);
    }
    else if(student.gender == "female")
    {
        if(student.roomCategory == "Grone")
            msg = await girlsRoomsController.updateGrone(student);
        if(student.roomCategory == "Grtwo")
            msg = await girlsRoomsController.updateGrtwo(student);
        if(student.roomCategory == "Grtree")
            msg = await girlsRoomsController.updateGrtree(student);
            if(student.roomCategory == "Grfour")
            msg = await girlsRoomsController.updateGrfour(student);
            if(student.roomCategory == "Grfive")
            msg = await girlsRoomsController.updateGrfive(student);
            if(student.roomCategory == "Grsix")
            msg = await girlsRoomsController.updateGrsix(student);
            if(student.roomCategory == "Grseven")
            msg = await girlsRoomsController.updateGrseven(student);
            if(student.roomCategory == "Greight")
            msg = await girlsRoomsController.updateGreight(student);
            if(student.roomCategory == "Grnine")
            msg = await girlsRoomsController.updateGrnine(student);
            if(student.roomCategory == "Grten")
            msg = await girlsRoomsController.updateGrten(student);
            if(student.roomCategory == "Greleven")
            msg = await girlsRoomsController.updateGreleven(student);
            if(student.roomCategory == "Grtwelve")
            msg = await girlsRoomsController.updateGrtwelve(student);
            if(student.roomCategory == "Grthirteen")
            msg = await girlsRoomsController.updateGrthirteen(student);
            if(student.roomCategory == "Grfourteen")
            msg = await girlsRoomsController.updateGrfourteen(student);
            if(student.roomCategory == "Grfifteen")
            msg = await girlsRoomsController.updateGrfifteen(student);
    }

    if(!msg.acknowledged) {
        req.msg = "Error: Student Details Not Updated Successfull";
        return;
    }
    return await new Student(student).save();
}

async function viewStudent() {
    // console.log(`serching student on db`);
    let student = await Student.find({});
    if(student) {
        return student;
    }
    else {
        return throwError;
    }
}

async function updateStudent(student) {
    // console.log(`updating student on db`);
    return Student.updateOne(
        { roomNo: student.roomNo },
        {
            $set: {
                surName: student.surName,
                firstName: student.firstName,
                middleName: student.middleName,
                mobileNo: student.mobileNo,

                email: student.email,

                currentAdress: student.currentAdress,
                collegeName: student.collegeName
            }
        }
    );
}

async function removeStudent(student) {
    console.log(student);
    if(student.gender == "male")
    {
        if(student.roomCategory == "Brone")
            msg = await boysRoomsController.updateBrone(student);
        if(student.roomCategory == "Brtwo")
            msg = await boysRoomsController.updateBrtwo(student);
        if(student.roomCategory == "Brtree")
            msg = await boysRoomsController.updateBrtree(student);
        if(student.roomCategory == "Brfour")
            msg = await boysRoomsController.updateBrfour(student);
        if(student.roomCategory == "Brfive")
            msg = await boysRoomsController.updateBrfive(student);
        if(student.roomCategory == "Brsix")
            msg = await boysRoomsController.updateBrsix(student);
        if(student.roomCategory == "Brseven")
            msg = await boysRoomsController.updateBrseven(student);
        if(student.roomCategory == "Breight")
            msg = await boysRoomsController.updateBreight(student);
        if(student.roomCategory == "Brnine")
            msg = await boysRoomsController.updateBrnine(student);
        if(student.roomCategory == "Brten")
            msg = await boysRoomsController.updateBrten(student);
            
    }
    else if(student.gender == "female")
    {
        if(student.roomCategory == "Grone")
            msg = await girlsRoomsController.updateGrone(student);
        if(student.roomCategory == "Grtwo")
            msg = await girlsRoomsController.updateGrtwo(student);
        if(student.roomCategory == "Grtree")
            msg = await girlsRoomsController.updateGrtree(student);
            if(student.roomCategory == "Grfour")
            msg = await girlsRoomsController.updateGrfour(student);
            if(student.roomCategory == "Grfive")
            msg = await girlsRoomsController.updateGrfive(student);
            if(student.roomCategory == "Grsix")
            msg = await girlsRoomsController.updateGrsix(student);
            if(student.roomCategory == "Grseven")
            msg = await girlsRoomsController.updateGrseven(student);
            if(student.roomCategory == "Greight")
            msg = await girlsRoomsController.updateGreight(student);
            if(student.roomCategory == "Grnine")
            msg = await girlsRoomsController.updateGrnine(student);
            if(student.roomCategory == "Grten")
            msg = await girlsRoomsController.updateGrten(student);
            if(student.roomCategory == "Greleven")
            msg = await girlsRoomsController.updateGreleven(student);
            if(student.roomCategory == "Grtwelve")
            msg = await girlsRoomsController.updateGrtwelve(student);
            if(student.roomCategory == "Grthirteen")
            msg = await girlsRoomsController.updateGrthirteen(student);
            if(student.roomCategory == "Grfourteen")
            msg = await girlsRoomsController.updateGrfourteen(student);
            if(student.roomCategory == "Grfifteen")
            msg = await girlsRoomsController.updateGrfifteen(student);
    }

    if(!msg.acknowledged) {
        req.msg = "Error: Student Details Not Remove Successfull";
        return;
    }

    return Student.updateOne( 
        { personNo: student.personNo },
        {
            $set: {
                isStatus: false
            }
        }    
    );
}


module.exports = {
    insertStudent,
    viewStudent,
    updateStudent,
    removeStudent
};
