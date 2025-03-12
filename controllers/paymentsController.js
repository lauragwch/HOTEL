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
        const totalByMonthAndYear = await paymentsService.totalByMonthAndYear(req.params.month, req.params.year);
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

async function addPayment(req, res) {
    try {
        const payment = req.body;
        const newPayment = await paymentsService.addPayment(payment);
        res.status(201);
        res.json(newPayment);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la création du paiement" });
    }
}

async function updatePayment(req, res) {
    try {
        const payment = req.body;
        const updatedPayment = await paymentsService.updatePayment(req.params.id, payment);
        res.status(201);
        res.json(updatedPayment);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la modification du paiement" });
    }
}

async function deletePayment(req, res) {
    try {
        const deletedPayment = await paymentsService.deletePayment(req.params.id);
        res.status(204);
        res.json(deletedPayment);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la suppression du paiement" });
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
    countByMethod,
    addPayment,
    updatePayment,
    deletePayment
};