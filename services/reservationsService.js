const connection = require('../config/bdd');

function allReservations(){
    return connection.promise().query('select R.id_reservation, R.checkin_date, R.checkout_date, R.total_price, R.reservation_status, R.id_room, C.first_name, C.last_name from reservations AS R inner join clients as C on R.id_client = C.id_client;').then((results) => {
        return results[0];
    });
}

function reservationsByStatus(reservation_status){
    return connection.promise().query('SELECT * FROM reservations WHERE reservation_status = ?', [reservation_status]).then((results) => {
        return results[0];
    });
}

function averageTotalCost(){
    return connection.promise().query('SELECT AVG(total_price) as average FROM reservations').then((results) => {
        return results[0];
    });
}

function costAbove(price){
    return connection.promise().query('SELECT * FROM reservations WHERE total_price >= ?', [price]).then((results) => {
        return results[0];
    });
}

function reservationsByRoomType(room_type){
    return connection.promise().query('SELECT * FROM reservations INNER JOIN room ON room.id_room = reservations.id_room WHERE room_type = ?', [room_type]).then((results) => {
        return results[0];
    });
}

function reservationsByRoomNumber(room_number){
    return connection.promise().query('SELECT COUNT(*) FROM reservations INNER JOIN room ON room.id_room = reservations.id_room WHERE room_number = ?', [room_number]).then((results) => {
        return results[0]; //fonctione pas
    });
}

function maxReservations(){
    return connection.promise().query('SELECT clients.id_client, count(id_reservation) AS "Nombre réservation" FROM clients INNER JOIN reservations ON reservations.id_client = clients.id_client GROUP BY clients.id_client').then((results) => {
        return results[0]; //fonctionne pas correctement
    });
}

function reservationsById(id){
    return connection.promise().query('SELECT * FROM reservations WHERE id_reservation = ?', [id]).then((results) => {
        return results[0];
    });
}

function addReservation(reservation){
    return connection.promise().query('INSERT INTO reservations SET id_client = ?, id_room = ?, checkin_date = ?, checkout_date = ?, total_price = ?, reservation_status = "en attente"', [reservation.user.id, reservation.body.id_room, reservation.body.checkin_date, reservation.body.checkout_date, reservation.body.total_price]).then(async (results) => {
        return await reservationsById(results[0].insertId);
    });
}

function updateReservation(id, reservation){
    return connection.promise().query('UPDATE reservations SET ? WHERE id_reservation = ?', [reservation, id]).then(async () => {
        return await reservationsById(id);
    });
}

function deleteReservation(id){
    return connection.promise().query('DELETE FROM reservations WHERE id_reservation = ?', [id]).then((results) => {
        return results[0].affectedRows;
    });
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