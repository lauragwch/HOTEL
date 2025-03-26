const connection = require('../config/bdd');

function allClients(){
    return connection.promise().query('SELECT id_client, first_name, last_name, email, phone, registration_date FROM clients').then((results) => {
        return results[0];
    });
}

function oneClient(id){
    return connection.promise().query('SELECT id_client, first_name, last_name, email, phone, registration_date FROM clients WHERE id_client = ?', [id]).then((results) => {
        return results[0];
    });
}

function clientsByYear(year){
    return connection.promise().query('SELECT id_client, first_name, last_name, email, phone, registration_date FROM clients INNER JOIN reservations ON reservations.id_client = clients.id_client WHERE YEAR(checkin_date) = ?', [year]).then((results) => {
        return results[0];
    });
}

function totalCostAbove(price){
    return connection.promise().query('SELECT id_client, first_name, last_name, email, phone, registration_date FROM clients INNER JOIN reservations ON reservations.id_client = clients.id_client WHERE total_price >= ?', [price]).then((results) => {
        return results[0];
    });
}

function clientsByRegistrationDate(month, year){
    return connection.promise().query('SELECT id_client, first_name, last_name, email, phone, registration_date From clients WHERE MONTH(registration_date) = ? AND YEAR(registration_date) = ?', [month, year]).then((results) => {
        return results[0];
    });
}

function clientsByCheckInDate(month, year){
    return connection.promise().query('SELECT DISTINCT id_client, first_name, last_name, email, phone, registration_date FROM clients INNER JOIN reservations ON reservations.id_client = clients.id_client WHERE MONTH(checkin_date) = ? AND YEAR(checkin_date)= ?', [month, year]).then((results) => {
        return results[0];
    });
}

function clientsByRoomType(roomType){
    return connection.promise().query('SELECT DISTINCT id_client, first_name, last_name, email, phone, registration_date FROM clients INNER JOIN reservations ON reservations.id_client = clients.id_client INNER JOIN room ON room.id_room = reservations.id_room WHERE room_type = ?', [roomType]).then((results) => {
        return results[0];
    });
}

function maxAmountSpent(){
    return connection.promise().query('SELECT CONCAT(first_name," ", last_name) as client, amount as total FROM clients INNER JOIN reservations ON reservations.id_client = clients.id_client INNER JOIN payer ON payer.id_reservation = reservations.id_reservation INNER JOIN payments ON payments.id_payment = payer.id_payment ORDER BY amount DESC limit 1').then((results) => {
        return results[0];
    });
}

function addClient(client){
    return connection.promise().query('INSERT INTO clients SET ?', client).then(async (results) => {
        return await oneClient (results[0].insertId);
    });
}

function updateClient(id, client){
    return connection.promise().query('UPDATE clients SET ? WHERE id_client = ?', [client, id]).then(async (results) => {
        return await oneClient(id);
    });
}

function deleteClient(id){
    return connection.promise().query('DELETE FROM clients WHERE id_client = ?', [id]).then((results) => {
        return results[0].affectedRows;
    });
}

function findClientByEmail(email){
    return connection.promise().query('SELECT * FROM clients WHERE email = ?', [email]).then((results) => {
        return results[0][0];
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
    addClient,
    updateClient,
    deleteClient,
    findClientByEmail
};