const express = require('express');
const router = express.Router();
const InclureController = require('../controllers/inclureController');

// GET /inclure/
router.get('/', (req, res) => {
    InclureController.AllInclure(req, res);
});

// GET /inclure/:id
router.get('/:id', (req, res) => {
    InclureController.inclureById(req, res);
});

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

// GET inclure/countServiceByServiceName/:service_name
router.get('/countServiceByServiceName/:service_name', (req, res) => {
    InclureController.countServiceByServiceName(req, res);
});

// GET /inclure/servicesByReservationTotalPriceAbove/:amount
router.get('/servicesByReservationTotalPriceAbove/:amount', (req, res) => {
    InclureController.servicesByReservationTotalPriceAbove(req, res);
});













module.exports = router;