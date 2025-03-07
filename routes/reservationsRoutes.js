const express = require('express');
const router = express.Router();
const ReservationsController = require('../controllers/reservationsController');

// GET /reservations/
router.get('/', (req, res) => {
    ReservationsController.allReservations(req, res);
});

// GET /reservations/status/:reservation_status
router.get('/status/:reservation_status', (req, res) => {
    ReservationsController.reservationsByStatus(req, res);
});

// GET /reservations/averageTotalCost
router.get('/averageTotalCost', (req, res) => {
    ReservationsController.averageTotalCost(req, res);
});

// GET /reservations/costAbove/:price
router.get('/costAbove/:price', (req, res) => {
    ReservationsController.costAbove(req, res);
});

// GET /reservations/byRoomType/:roomType
router.get('/byRoomType/:room_type', (req, res) => {
    ReservationsController.reservationsByRoomType(req, res);
});

// GET /reservations/byRoomNumber/:roomNumber
router.get('/byRoomNumber/:room_number', (req, res) => {
    ReservationsController.reservationsByRoomNumber(req, res);
});

// GET /reservations/maxReservations
router.get('/maxReservations', (req, res) => {
    ReservationsController.maxReservations(req, res);
});
































module.exports = router;