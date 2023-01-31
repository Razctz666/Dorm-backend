const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const boysRoomsController = require('../controllers/boysRooms.controller');


router.get('/broneRooms', asyncHandler(broneAvailability), total);
router.get('/brtwoRooms', asyncHandler(brtwoAvailability), total);
router.get('/brtreeRooms', asyncHandler(brtreeAvailability), total);
router.get('/brfourRooms', asyncHandler(brfourAvailability), total);
router.get('/brfiveRooms', asyncHandler(brfiveAvailability), total);
router.get('/brsixRooms', asyncHandler(brsixAvailability), total);
router.get('/brsevenRooms', asyncHandler(brsevenAvailability), total);
router.get('/brsevenRooms', asyncHandler(brsevenAvailability), total);
router.get('/breightRooms', asyncHandler(breightAvailability), total);
router.get('/brnineRooms', asyncHandler(brnineAvailability), total);
router.get('/brtenRooms', asyncHandler(brtenAvailability), total);

async function broneAvailability(req, res, next) {
    req.total = await boysRoomsController.broneAvailability();
    next();
}

async function brtwoAvailability(req, res, next) {
    req.total = await boysRoomsController.brtwoAvailability();
    next();
}

async function brtreeAvailability(req, res, next) {
    req.total = await boysRoomsController.brtreeAvailability();
    next();
}

async function brfourAvailability(req, res, next) {
    req.total = await boysRoomsController.brfourAvailability();
    next();
}

async function brfiveAvailability(req, res, next) {
    req.total = await boysRoomsController.brfiveAvailability();
    next();
}

async function brsixAvailability(req, res, next) {
    req.total = await boysRoomsController.brsixAvailability();
    next();
}

async function brsevenAvailability(req, res, next) {
    req.total = await boysRoomsController.brsevenAvailability();
    next();
}

async function breightAvailability(req, res, next) {
    req.total = await boysRoomsController.breightAvailability();
    next();
}

async function brnineAvailability(req, res, next) {
    req.total = await boysRoomsController.brnineAvailability();
    next();
}

async function brtenAvailability(req, res, next) {
    req.total = await boysRoomsController.brtenAvailability();
    next();
}

function total(req, res) {
    let total = req.total;
    res.json({ 
        total
    });
}

module.exports = router;

