const express = require('express');
const router = express.Router();
const ClientsController = require('../controllers/clientsController');
const AuthController = require('../controllers/authController');


// GET /clients/
router.get('/', (req, res) => {
    ClientsController.allClients(req, res);
});

// GET /me
router.get('/me', AuthController.verifyToken, (req, res) => {
    ClientsController.findMe(req, res);
});

// GET /clients/year/:year
router.get('/year/:year', (req, res) => {
    ClientsController.clientsByYear(req, res);
});

// GET /clients/totalCostAbove/:price
router.get('/totalCostAbove/:price', (req, res) => {
    ClientsController.totalCostAbove(req, res);
});

// GET /clients/registration/:month/:year
router.get('/registrationDate/:month/:year', (req, res) => {
    ClientsController.clientsByRegistrationDate(req, res);
});

// GET /clients/checkInDate/:month/:year
router.get('/checkInDate/:month/:year', (req, res) => {
    ClientsController.clientsByCheckInDate(req, res);
});

// GET /clients/roomType/:roomType
router.get('/roomType/:roomType', (req, res) => {
    ClientsController.clientsByRoomType(req, res);
});

// GET /clients/maxAmountSpent
router.get('/maxAmountSpent', (req, res) => {
    ClientsController.maxAmountSpent(req, res);
});

// GET /clients/:id
router.get('/:id', (req, res) => {
    ClientsController.oneClient(req, res);
});

// POST /clients/
router.post('/', (req, res) => {
    ClientsController.addClient(req, res);
});

// PATCH /clients/:id
router.patch('/:id',AuthController.verifyToken, (req, res) => {
    ClientsController.updateClient(req, res);
});

// DELETE /clients/:id
router.delete('/:id',AuthController.verifyToken, (req, res) => {
    ClientsController.deleteClient(req, res);
});

//POST /clients/password_forget
router.post('/password_forget', (req, res) => {
    ClientsController.passwordForget(req, res);
});

//POST /clients/password_reset 
router.post('/password_reset/:token', AuthController.verifyToken, (req, res) => {
    ClientsController.passwordReset(req, res);
});



module.exports = router;