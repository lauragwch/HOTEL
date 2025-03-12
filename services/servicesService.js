const connection = require('../config/bdd');

function allServices() {
    return connection.promise().query('SELECT * FROM services').then((results) => {
        return results[0];
    });
}

function serviceById(id) {
    return connection.promise().query('SELECT * FROM services WHERE id_service = ?', [id]).then((results) => {
        return results[0];
    });
}

function servicesAbove(amount) {
    return connection.promise().query('SELECT * FROM services WHERE price >= ?', [amount]).then((results) => {
        return results[0];
    });
}

function mostPopular() {
    return connection.promise().query('SELECT service_name, SUM(quantity) as "Nombre utilisation du service" FROM services JOIN service_usage ON service_usage.id_service = services.id_service GROUP BY service_usage.id_service ORDER BY sum(quantity) DESC').then((results) => {
        return results[0];
    });
}

function totalCostServices(roomType) {
    return connection.promise().query('SELECT SUM(service_usage.total_price) AS "Montant total des services" FROM service_usage INNER JOIN reservations ON reservations.id_reservation = service_usage.id_reservation INNER JOIN room ON room.id_room = reservations.id_room WHERE room_type = ?', [roomType]).then((results) => {
        return results[0];
    });
}

function cheapestService() {
    return connection.promise().query('SELECT service_name FROM services ORDER BY price limit 1').then((results) => {
        return results[0];
    });
}

function addService(service) {
    return connection.promise().query('INSERT INTO services SET ?', [service]).then(async (results) => {
        return await serviceById(results[0].insertId);
    });
}

function updateService(id, service) {
    return connection.promise().query('UPDATE services SET ? WHERE id_service = ?', [service, id]).then(async (results) => {
        return await serviceById(id);
    });
}

function deleteService(id) {
    return connection.promise().query('DELETE FROM services WHERE id_service = ?', [id]).then((results) => {
        return results[0].affectedRows;
    });
}
















module.exports = {
    allServices,
    serviceById,
    servicesAbove,
    mostPopular,
    totalCostServices,
    cheapestService,
    addService,
    updateService,
    deleteService
};