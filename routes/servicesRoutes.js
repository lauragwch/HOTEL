const express = require('express');
const router = express.Router();
const ServicesController = require('../controllers/servicesController');


// GET /services/
router.get('/', (req, res) => {
    ServicesController.allServices(req, res);
});

// GET /services/:id
router.get('/:id', (req, res) => {
    ServicesController.serviceById(req, res);
});

// GET /services/above/:amount
router.get('/above/:amount', (req, res) => {
    ServicesController.servicesAbove(req, res);
});

// GET /services/mostpopular
router.get('/mostpopular', (req, res) => {
    ServicesController.mostPopular(req, res);
});

// GET /services/totalCostServices/:roomType
router.get('/totalCostServices/:roomType', (req, res) => {
    ServicesController.totalCostServices(req, res);
});


// GET /services/cheapestservice
router.get('/cheapestservice', (req, res) => {
    ServicesController.cheapestService(req, res);
});






















module.exports = router;