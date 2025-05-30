const express = require('express');
const router = express.Router();
const RoomsController = require('../controllers/roomsController');
const AuthController = require('../controllers/authController');


// Toutes les routes commenceront par /rooms

// GET /rooms/
router.get('/', (req, res) => {
    RoomsController.AllRooms(req, res);
});

// GET /rooms/available
router.get('/available', (req, res) => {
    RoomsController.AvailableRooms(req, res);
});


// GET /rooms/average_capacity
router.get('/average_capacity', (req, res) => {
    RoomsController.averageCapacity(req, res);
});


// GET /rooms/pricesAbove/:price
router.get('/pricesAbove/:price', (req, res) => {
    RoomsController.PricesAbove(req, res);
});

// GET /rooms/type/:type
router.get('/type/:type', (req, res) => {
    RoomsController.RoomsByType(req, res);
});

// GET /rooms/capacityAbove/:capacity
router.get('/capacityAbove/:capacity', (req, res) => {
    RoomsController.CapacityAbove(req, res);
});

// GET /rooms/type/:type/available
router.get('/type/:type/available', (req, res) => {
    RoomsController.AvailableRoomsByType(req, res);
});

// GET /pricesBelow/:price
router.get('/pricesBelow/:price', (req, res) => {
    RoomsController.PricesBelow(req, res);
});


// GET /rooms/prices/:min/:max
router.get('/prices/:min/:max', (req, res) => {
    RoomsController.PricesBetween(req, res);
});


// GET /rooms/:id
router.get('/:id', (req, res) => {
    RoomsController.OneRoom(req, res);
});

// POST /rooms/
router.post('/',AuthController.verifyToken, (req, res) => {
    RoomsController.AddRoom(req, res);
});

// PATCH /rooms/:id
router.patch('/:id',AuthController.verifyToken, (req, res) => {
    RoomsController.UpdateRoom(req, res);
});

// DELETE /rooms/:id
router.delete('/:id',AuthController.verifyToken, (req, res) => {
    RoomsController.DeleteRoom(req, res);
});




module.exports = router;