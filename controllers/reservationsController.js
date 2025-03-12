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

async function reservationsById(req, res) {
    try {
        const reservationsById = await reservationsService.reservationsById(req.params.id);
        res.status(200);
        res.json(reservationsById);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des réservations" });
    }
}

async function addReservation(req, res) {
    try {
        const reservation = req.body;
        const newReservation = await reservationsService.addReservation(reservation);
        res.status(201);
        res.json(newReservation);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de l'ajout de la réservation" });
    }
}

async function updateReservation(req, res) {
    try {
        const reservation = req.body;
        const updatedReservation = await reservationsService.updateReservation(req.params.id, reservation);
        res.status(201);
        res.json(updatedReservation);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la modification de la réservation" });
    }
}

async function deleteReservation(req, res) {
    try {
        const deletedReservation = await reservationsService.deleteReservation(req.params.id);
        res.status(204);
        res.json(deletedReservation);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la suppression de la réservation" });
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
    reservationsById,
    addReservation,
    updateReservation,
    deleteReservation

};