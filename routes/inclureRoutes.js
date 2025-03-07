const express = require('express');
const router = express.Router();
const InclureController = require('../controllers/inclureController');


// GET /inclure/servicesByReservation/:id_reservation
router.get('/servicesByReservation/:id_reservation', (req, res) => {
    InclureController.servicesByReservation(req, res);
});

// GET /inclure/totalPriceServicesByReservation/:id_reservation
router.get('/totalPriceServicesByReservation/:id_reservation', (req, res) => {
    InclureController.totalPriceServicesByReservation(req, res);
});

// GET /inclure/totalServicesByReservation/:id_reservation
router.get('/totalServicesByReservation/:id_reservation', (req, res) => {
    InclureController.totalServicesByReservation(req, res);
});

// GET /inclure/servicesByRoomType/:roomType
router.get('/servicesByRoomType/:roomType', (req, res) => {
    InclureController.servicesByRoomType(req, res);
});













module.exports = router;