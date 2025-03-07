const reservationsService = require('../services/reservationsService');

async function allReservations(req, res) {
    try {
        const allReservations = await reservationsService.allReservations();
        res.status(200);
        res.json(allReservations);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des réservations" });
    }
}

async function reservationsByStatus(req, res) {
    try {
        const reservationsByStatus = await reservationsService.reservationsByStatus(req.params.reservation_status);
        res.status(200);
        res.json(reservationsByStatus);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des réservations" });
    }
}

async function averageTotalCost(req, res) {
    try {
        const averageTotalCost = await reservationsService.averageTotalCost();
        res.status(200);
        res.json(averageTotalCost);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des réservations" });
    }
}

async function costAbove(req, res) {
    try {
        const costAbove = await reservationsService.costAbove(req.params.price);
        res.status(200);
        res.json(costAbove);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des réservations" });
    }
}

async function reservationsByRoomType(req, res) {
    try {
        const reservationsByRoomType = await reservationsService.reservationsByRoomType(req.params.room_type);
        res.status(200);
        res.json(reservationsByRoomType);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des réservations" });
    }
}

async function reservationsByRoomNumber(req, res) {
    try {
        const reservationsByRoomNumber = await reservationsService.reservationsByRoomNumber(req.params.room_number);
        res.status(200);
        res.json(reservationsByRoomNumber);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des réservations" });
    }
}

async function maxReservations(req, res) {
    try {
        const maxReservations = await reservationsService.maxReservations();
        res.status(200);
        res.json(maxReservations);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des réservations" });
    }
}






























module.exports = {
    allReservations,
    reservationsByStatus,
    averageTotalCost,
    costAbove,
    reservationsByRoomType,
    reservationsByRoomNumber,
    maxReservations,
};