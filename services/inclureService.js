const connection = require('../config/bdd');

function AllInclure() {
    return connection.promise().query('SELECT * FROM service_usage').then((results) => {
        return results[0];
    });
}

function OneInclure(id) {
    return connection.promise().query('SELECT * FROM service_usage WHERE id_service_usage = ?', [id]).then((results) => {
        return results[0];
    });
}

function servicesByReservation(id_reservation) {
    return connection.promise().query('SELECT service_name FROM services INNER JOIN service_usage ON service_usage.id_service = services.id_service INNER JOIN reservations ON reservations.id_reservation = service_usage.id_reservation WHERE reservations.id_reservation = ?', [id_reservation]).then((results) => {
        return results[0];
    });
}

function totalPriceServicesByReservation(id_reservation) {
    return connection.promise().query('SELECT SUM(total_price) FROM service_usage WHERE id_reservation = ?', [id_reservation]).then((results) => {
        return results[0];
    });
}

function totalServicesByReservation(id_reservation) {
    return connection.promise().query('SELECT COUNT(id_service) FROM service_usage WHERE id_reservation = ?', [id_reservation]).then((results) => {
        return results[0];
    });
}

function servicesByRoomType(roomType) {
    return connection.promise().query('SELECT * FROM reservations INNER JOIN service_usage ON service_usage.id_reservation = reservations.id_reservation INNER JOIN services ON services.id_service = service_usage.id_service INNER JOIN room ON room.id_room = reservations.id_room WHERE room_type = ?', [roomType]).then((results) => {
        return results[0];
    });
}

function countServiceByServiceName(service_name) {
    return connection.promise().query('SELECT COUNT(*) FROM service_usage INNER JOIN services ON services.id_service = service_usage.id_service WHERE service_name like ?', [service_name]).then((results) => {
        return results[0];
    });
}

function servicesByReservationTotalPriceAbove(amount) {
    return connection.promise().query('SELECT service_name FROM services INNER JOIN service_usage ON service_usage.id_service = services.id_service INNER JOIN reservations ON reservations.id_reservation = service_usage.id_reservation WHERE reservations.total_price > ?', [amount]).then((results) => {
        return results[0];
    });
}

function addInclure(data) {
    return connection.promise().query('INSERT INTO service_usage SET ?', [data]).then((results) => {
        return results[0];
    });
}






module.exports = {
    AllInclure,
    OneInclure,
    servicesByReservation,
    totalPriceServicesByReservation,
    totalServicesByReservation,
    servicesByRoomType,
    countServiceByServiceName,
    servicesByReservationTotalPriceAbove,
    addInclure
}