const express = require('express');
const router = express.Router();
const PaymentsController = require('../controllers/paymentsController');
const AuthController = require('../controllers/authController');


// GET /payments/
router.get('/', (req, res) => {
    PaymentsController.allPayments(req, res);
});

// GET /payments/:id
router.get('/:id', (req, res) => {
    PaymentsController.paymentById(req, res);
});

// GET /payments/method/:method
router.get('/method/:method', (req, res) => {
    PaymentsController.paymentsByMethod(req, res);
});

// GET /payments/totalByMonthYear:month:year
router.get('/totalByMonthYear/:month/:year', (req, res) => {
    PaymentsController.totalByMonthAndYear(req, res);
});

// GET /payments/above/:amount
router.get('/above/:amount', (req, res) => {
    PaymentsController.paymentsAbove(req, res);
});

// GET /payments/reservationStatus/:status
router.get('/reservationStatus/:status', (req, res) => {
    PaymentsController.paymentsByReservationStatus(req, res);
});

// GET / payments/totalByReservationStatus/:status
router.get('/totalByReservationStatus/:status', (req, res) => {
    PaymentsController.totalByReservationStatus(req, res);
});

// GET /payments/countByMethod/:method
router.get('/countByMethod/:method', (req, res) => {
    PaymentsController.countByMethod(req, res);
});

// POST /payments/
router.post('/',AuthController.verifyToken, (req, res) => {
    PaymentsController.addPayment(req, res);
});

// PATCH /payments/:id
router.patch('/:id',AuthController.verifyToken, (req, res) => {
    PaymentsController.updatePayment(req, res);
});

// DELETE /payments/:id
router.delete('/:id',AuthController.verifyToken, (req, res) => {
    PaymentsController.deletePayment(req, res);
});














module.exports = router;