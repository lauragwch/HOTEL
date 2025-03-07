const servicesService = require('../services/servicesService');

async function allServices(req, res) {
    try {
        const allServices = await servicesService.allServices();
        res.status(200);
        res.json(allServices);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des services" });
    }
}

async function serviceById(req, res) {
    try {
        const serviceById = await servicesService.serviceById(req.params.id);
        res.status(200);
        res.json(serviceById);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération du service" });
    }
}

async function servicesAbove(req, res) {
    try {
        const servicesAbove = await servicesService.servicesAbove(req.params.amount);
        res.status(200);
        res.json(servicesAbove);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des services" });
    }
}

async function mostPopular(req, res) {
    try {
        const mostPopular = await servicesService.mostPopular();
        res.status(200);
        res.json(mostPopular);
    }
    catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des services" });
    }
}

async function totalCostServices(req, res) {
    try {
        const totalCostServices = await servicesService.totalCostServices(req.params.roomType);
        res.status(200);
        res.json(totalCostServices);
    }
    catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des services" });
    }
}

async function cheapestService(req, res) {
    try {
        const cheapestService = await servicesService.cheapestService();
        res.status(200);
        res.json(cheapestService);
    }
    catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des services" });
    }
}













module.exports = {
    allServices,
    serviceById,
    servicesAbove,
    mostPopular,
    totalCostServices,
    cheapestService
};