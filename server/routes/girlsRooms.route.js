const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const girlsRoomsController = require('../controllers/girlsRooms.controller');

router.get('/groneRooms', asyncHandler(groneAvailability), total);
router.get('/grtwoRooms', asyncHandler(grtwoAvailability), total);
router.get('/grtreeRooms', asyncHandler(grtreeAvailability), total);
router.get('/grfourRooms', asyncHandler(grfourAvailability), total);
router.get('/grfiveRooms', asyncHandler(grfiveAvailability), total);
router.get('/grsixRooms', asyncHandler(grsixAvailability), total);
router.get('/grsevenRooms', asyncHandler(grsevenAvailability), total);
router.get('/greightRooms', asyncHandler(greightAvailability), total);
router.get('/grnineRooms', asyncHandler(grnineAvailability), total);
router.get('/grtenRooms', asyncHandler(grtenAvailability), total);
router.get('/grelevenRooms', asyncHandler(grelevenAvailability), total);
router.get('/grtwelveRooms', asyncHandler(grtwelveAvailability), total);
router.get('/grthirteenRooms', asyncHandler(grthirteenAvailability), total);
router.get('/grfourteenRooms', asyncHandler(grfourteenAvailability), total);
router.get('/grfifteenRooms', asyncHandler(grfifteenAvailability), total);

async function groneAvailability(req, res, next) {
    req.total = await girlsRoomsController.groneAvailability();
    next();
}

async function grtwoAvailability(req, res, next) {
    req.total = await girlsRoomsController.grtwoAvailability();
    next();
}

async function grtreeAvailability(req, res, next) {
    req.total = await girlsRoomsController.grtreeAvailability();
    next();
}

async function grfourAvailability(req, res, next) {
    req.total = await girlsRoomsController.grfourAvailability();
    next();
}

async function grfiveAvailability(req, res, next) {
    req.total = await girlsRoomsController.grfiveAvailability();
    next();
}

async function grsixAvailability(req, res, next) {
    req.total = await girlsRoomsController.grsixAvailability();
    next();
}

async function grsevenAvailability(req, res, next) {
    req.total = await girlsRoomsController.grsevenAvailability();
    next();
}

async function greightAvailability(req, res, next) {
    req.total = await girlsRoomsController.greightAvailability();
    next();
}

async function grnineAvailability(req, res, next) {
    req.total = await girlsRoomsController.grnineAvailability();
    next();
}

async function grtenAvailability(req, res, next) {
    req.total = await girlsRoomsController.grtenAvailability();
    next();
}

async function grelevenAvailability(req, res, next) {
    req.total = await girlsRoomsController.grelevenAvailability();
    next();
}

async function grtwelveAvailability(req, res, next) {
    req.total = await girlsRoomsController.grtwelveAvailability();
    next();
}

async function grthirteenAvailability(req, res, next) {
    req.total = await girlsRoomsController.grthirteenAvailability();
    next();
}

async function grfourteenAvailability(req, res, next) {
    req.total = await girlsRoomsController.grfourteenAvailability();
    next();
}

async function grfifteenAvailability(req, res, next) {
    req.total = await girlsRoomsController.grfifteenAvailability();
    next();
}

function total(req, res) {
    let total = req.total;
    res.json({ 
        total
    });
}

module.exports = router;

