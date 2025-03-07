const connection = require('../config/bdd');

function AllRooms(){
   return connection.promise().query('SELECT * FROM room').then((results) => {
       return results[0];
   });
}

function OneRoom(id){
    return connection.promise().query('SELECT * FROM room WHERE id_room = ?', [id]).then((results) => {
        return results[0][0];
    });
}

function AvailableRooms(){
    return connection.promise().query('SELECT * FROM room WHERE status = 0').then((results) => {
        return results[0];
    });
}

function averageCapacity(){
    return connection.promise().query('SELECT AVG(capacity) as "Capacité moyenne" FROM room').then((results) => {
        return results[0][0];
    });
}

function PricesAbove(price){
    return connection.promise().query('SELECT * FROM room WHERE price_per_night >= ?', [price]).then((results) => {
        return results[0];
    });
}

function RoomsByType(type){
    return connection.promise().query('SELECT * FROM room WHERE room_type = ?', [type]).then((results) => {
        return results[0];
    });
}

function CapacityAbove(capacity){
    return connection.promise().query('SELECT * FROM room WHERE capacity >= ?', [capacity]).then((results) => {
        return results[0];
    });
}

function AvailableRoomsByType(type){
    return connection.promise().query('SELECT * FROM room WHERE status = 0 AND room_type = ?', [type]).then((results) => {
        return results[0];
    });
}

function PricesBelow(price){
    return connection.promise().query('SELECT * FROM room WHERE price_per_night <= ?', [price]).then((results) => {
        return results[0];
    });
}

function PricesBetween(min, max){
    return connection.promise().query('SELECT * FROM room WHERE price_per_night BETWEEN ? AND ?', [min, max]).then((results) => {
        return results[0];
    });
}
























module.exports = {
    AllRooms,
    OneRoom,
    AvailableRooms,
    averageCapacity,
    PricesAbove,
    RoomsByType,
    CapacityAbove,
    AvailableRoomsByType,
    PricesBelow,
    PricesBetween,
}   