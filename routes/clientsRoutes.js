const express = require('express');
const router = express.Router();
const ClientsController = require('../controllers/clientsController');


// GET /clients/
router.get('/', (req, res) => {
    ClientsController.allClients(req, res);
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



module.exports = router;