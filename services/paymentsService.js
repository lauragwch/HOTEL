const connection = require('../config/bdd');

function allPayments(){
    return connection.promise().query('SELECT * FROM payments').then((results) => {
        return results[0];
    });
}

function paymentById(id){
    return connection.promise().query('SELECT * FROM payments WHERE id_payment = ?', [id]).then((results) => {
        return results[0];
    });
}

function paymentsByMethod(method){
    return connection.promise().query('SELECT * FROM payments WHERE payment_method LIKE  ?', [method]).then((results) => {
        return results[0];
    });
}

function totalByMonthAndYear(month, year){
    console.log(month, year);
    return connection.promise().query('SELECT SUM(amount) AS "Montant total" FROM payments WHERE MONTH(payment_date) = ? AND YEAR(payment_date) = ? ', [month, year]).then((results) => {
        return results[0];
    });
}

function paymentsAbove(amount){
    return connection.promise().query('SELECT * FROM payments WHERE amount >= ?', [amount]).then((results) => {
        return results[0];
    });
}

function paymentsByReservationStatus(status){
    return connection.promise().query('SELECT * FROM payments JOIN payer ON payer.id_payment = payments.id_payment JOIN reservations ON reservations.id_reservation = payer.id_reservation WHERE reservation_status = ?', [status]).then((results) => {
        return results[0];
    });
}

function totalByReservationStatus(status){
    return connection.promise().query('SELECT SUM(amount) FROM payments JOIN payer ON payer.id_payment = payments.id_payment JOIN reservations ON reservations.id_reservation = payer.id_reservation WHERE reservation_status = ?', [status]).then((results) => {
        return results[0];
    });
}

function countByMethod(method){
    return connection.promise().query('SELECT COUNT(*) AS "Nombre de reservations" FROM payments WHERE payment_method = ?', [method]).then((results) => {
        return results[0];
    });
}

function addPayment(payment){
    return connection.promise().query('INSERT INTO payments SET ?', payment).then(async (results) => {
        return await paymentById(results[0].insertId);
    });
}

function updatePayment(id, payment){
    return connection.promise().query('UPDATE payments SET ? WHERE id_payment = ?', [payment, id]).then(async (results) => {
        return await paymentById(id);
    });
}

function deletePayment(id){
    return connection.promise().query('DELETE FROM payments WHERE id_payment = ?', [id]).then((results) => {
        return results[0].affectedRows;
    });
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