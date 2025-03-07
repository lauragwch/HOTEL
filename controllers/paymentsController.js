const paymentsService = require('../services/paymentsService');

async function allPayments(req, res) {
    try {
        const allPayments = await paymentsService.allPayments();
        res.status(200);
        res.json(allPayments);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des paiements" });
    }
}

async function paymentById(req, res) {
    try {
        const paymentById = await paymentsService.paymentById(req.params.id);
        res.status(200);
        res.json(paymentById);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération du paiement" });
    }
}

async function paymentsByMethod(req, res) {
    try {
        const paymentsByMethod = await paymentsService.paymentsByMethod(req.params.method);
        res.status(200);
        res.json(paymentsByMethod);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des paiements" });
    }
}

async function totalByMonthAndYear(req, res) {
    try {
        const totalByMonthAndYear = await paymentsService.totalByMonthAndYear(req.params.month);
        res.status(200);
        res.json(totalByMonthAndYear);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des paiements" });
    }
}

async function paymentsAbove(req, res) {
    try {
        const paymentsAbove = await paymentsService.paymentsAbove(req.params.amount);
        res.status(200);
        res.json(paymentsAbove);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des paiements" });
    }
}

async function paymentsByReservationStatus(req, res) {
    try {
        const paymentsByReservationStatus = await paymentsService.paymentsByReservationStatus(req.params.status);
        res.status(200);
        res.json(paymentsByReservationStatus);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des paiements" });
    }
}

async function totalByReservationStatus(req, res) {
    try {
        const totalByReservationStatus = await paymentsService.totalByReservationStatus(req.params.status);
        res.status(200);
        res.json(totalByReservationStatus);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des paiements" });
    }
}

async function countByMethod(req, res) {
    try {
        const countByMethod = await paymentsService.countByMethod(req.params.method);
        res.status(200);
        res.json(countByMethod);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des paiements" });
    }
}







module.exports = {
    allPayments,
    paymentById,
    paymentsByMethod,
    totalByMonthAndYear,
    paymentsAbove,
    paymentsByReservationStatus,
    totalByReservationStatus,
    countByMethod
};