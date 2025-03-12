const inclureService = require('../services/inclureService');

async function AllInclure(req, res) {
    try {
        const allInclure = await inclureService.AllInclure();
        res.status(200);
        res.json(allInclure);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des services" });
    }
}

async function inclureById(req, res) {
    try {
        const inclureById = await inclureService.OneInclure(req.params.id);
        res.status(200);
        res.json(inclureById);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération du service" });
    }
}

async function allInclure(req, res) {
    try {
        const allInclure = await inclureService.allInclure();
        res.status(200);
        res.json(allInclure);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des services" });
    }
}

async function servicesByReservation(req, res) {
    try {
        const servicesByReservation = await inclureService.servicesByReservation(req.params.id_reservation);
        res.status(200);
        res.json(servicesByReservation);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des services" });
    }
}

async function totalPriceServicesByReservation(req, res) {
    try {
        const totalPriceServicesByReservation = await inclureService.totalPriceServicesByReservation(req.params.id_reservation);
        res.status(200);
        res.json(totalPriceServicesByReservation);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des services" });
    }
}

async function totalServicesByReservation(req, res) {
    try {
        const totalServicesByReservation = await inclureService.totalServicesByReservation(req.params.id_reservation);
        res.status(200);
        res.json(totalServicesByReservation);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des services" });
    }
}

async function servicesByRoomType(req, res) {
    try {
        const servicesByRoomType = await inclureService.servicesByRoomType(req.params.roomType);
        res.status(200);
        res.json(servicesByRoomType);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des services" });
    }
}

async function countServiceByServiceName(req, res) {
    try {
        const countServiceByServiceName = await inclureService.countServiceByServiceName(req.params.service_name);
        res.status(200);
        res.json(countServiceByServiceName);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des services" });
    }
}

async function servicesByReservationTotalPriceAbove(req, res) {
    try {
        const servicesByReservationTotalPriceAbove = await inclureService.servicesByReservationTotalPriceAbove(req.params.amount);
        res.status(200);
        res.json(servicesByReservationTotalPriceAbove);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des services" });
    }
}










module.exports = {
    AllInclure,
    inclureById,
    servicesByReservation,
    totalPriceServicesByReservation,
    totalServicesByReservation,
    servicesByRoomType,
    countServiceByServiceName,
    servicesByReservationTotalPriceAbove
}