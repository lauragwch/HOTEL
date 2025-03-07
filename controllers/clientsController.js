const clientsService = require('../services/clientsService');

async function allClients(req, res) {
    try {
        const allClients = await clientsService.allClients();
        res.status(200);
        res.json(allClients);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des clients" });
    }
}

async function oneClient(req, res) {
    try {
        const oneClient = await clientsService.oneClient(req.params.id);
        res.status(200);
        res.json(oneClient);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération du client" });
    }
}

async function clientsByYear(req, res) {
    try {
        const clientsByYear = await clientsService.clientsByYear(req.params.year);
        res.status(200);
        res.json(clientsByYear);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des clients" });
    }
}

async function totalCostAbove(req, res) {
    try {
        const totalCostAbove = await clientsService.totalCostAbove(req.params.price);
        res.status(200);
        res.json(totalCostAbove);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des clients" });
    }
}

async function clientsByRegistrationDate(req, res) {
    try {
        const clientsByRegistrationDate = await clientsService.clientsByRegistrationDate(req.params.month, req.params.year);
        res.status(200);
        res.json(clientsByRegistrationDate);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des clients" });
    }
}

async function clientsByCheckInDate(req, res) {
    try {
        const clientsByCheckInDate = await clientsService.clientsByCheckInDate(req.params.month, req.params.year);
        res.status(200);
        res.json(clientsByCheckInDate);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des clients" });
    }
}

async function clientsByRoomType(req, res) {
    try {
        const clientsByRoomType = await clientsService.clientsByRoomType(req.params.roomType);
        res.status(200);
        res.json(clientsByRoomType);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des clients" });
    }
}

async function maxAmountSpent(req, res) {
    try {
        const maxAmountSpent = await clientsService.maxAmountSpent();
        res.status(200);
        res.json(maxAmountSpent);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des clients" });
    }
}














module.exports = {
    allClients,
    oneClient,
    clientsByYear,
    totalCostAbove,
    clientsByRegistrationDate,
    clientsByCheckInDate,
    clientsByRoomType,
    maxAmountSpent,
};