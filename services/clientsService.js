const connection = require('../config/bdd');

function allClients(){
    return connection.promise().query('SELECT * FROM clients').then((results) => {
        return results[0];
    });
}

function oneClient(id){
    return connection.promise().query('SELECT * FROM clients WHERE id_client = ?', [id]).then((results) => {
        return results[0];
    });
}

function clientsByYear(year){
    return connection.promise().query('SELECT * FROM clients INNER JOIN reservations ON reservations.id_client = clients.id_client WHERE YEAR(checkin_date) = ?', [year]).then((results) => {
        return results[0];
    });
}

function totalCostAbove(price){
    return connection.promise().query('SELECT * FROM clients INNER JOIN reservations ON reservations.id_client = clients.id_client WHERE total_price >= ?', [price]).then((results) => {
        return results[0];
    });
}

function clientsByRegistrationDate(month, year){
    return connection.promise().query('SELECT * From clients WHERE MONTH(registration_date) = ? AND YEAR(registration_date) = ?', [month, year]).then((results) => {
        return results[0];
    });
}

function clientsByCheckInDate(month, year){
    return connection.promise().query('SELECT DISTINCT * FROM clients INNER JOIN reservations ON reservations.id_client = clients.id_client WHERE MONTH(checkin_date) = ? AND YEAR(checkin_date)= ?', [month, year]).then((results) => {
        return results[0];
    });
}

function clientsByRoomType(roomType){
    return connection.promise().query('SELECT DISTINCT * FROM clients INNER JOIN reservations ON reservations.id_client = clients.id_client INNER JOIN room ON room.id_room = reservations.id_room WHERE room_type = ?', [roomType]).then((results) => {
        return results[0];
    });
}

function maxAmountSpent(){
    return connection.promise().query('SELECT CONCAT(first_name," ", last_name) as client, amount as total FROM clients INNER JOIN reservations ON reservations.id_client = clients.id_client INNER JOIN payer ON payer.id_reservation = reservations.id_reservation INNER JOIN payments ON payments.id_payment = payer.id_payment ORDER BY amount DESC limit 1').then((results) => {
        return results[0];
    });
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