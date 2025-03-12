const RoomsService = require('../services/roomsService');

async function AllRooms(req, res) {
    try {
        const AllRooms = await RoomsService.AllRooms();
        res.status(200);
        res.json(AllRooms);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des chambres" });
    }
}

async function OneRoom(req, res) {
    try {
        const OneRoom = await RoomsService.OneRoom(req.params.id);
        res.status(200);
        res.json (OneRoom);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération de la chambre" });
    }
}

async function AvailableRooms(req, res) {
    try {
        const AvailableRooms = await RoomsService.AvailableRooms();
        res.status(200);
        res.json(AvailableRooms);
    }
    catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des chambres disponibles" });
    }
}

async function averageCapacity(req, res) {
    try {
        const averageCapacity = await RoomsService.averageCapacity();
        res.status(200);
        res.json(averageCapacity);
    }
    catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération de la capacité moyenne" });
    }
}

async function PricesAbove(req, res) {
    try {
        const PricesAbove = await RoomsService.PricesAbove(req.params.price);
        res.status(200);
        res.json(PricesAbove);
    }
    catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des chambres" });
    }
}

async function RoomsByType(req, res) {
    try {
        const RoomsByType = await RoomsService.RoomsByType(req.params.type);
        res.status(200);
        res.json(RoomsByType);
    }
    catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des chambres" });
    }
}

async function CapacityAbove(req, res) {
    try {
        const CapacityAbove = await RoomsService.CapacityAbove(req.params.capacity);
        res.status(200);
        res.json(CapacityAbove);
    }
    catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des chambres" });
    }
}

async function AvailableRoomsByType(req, res) {
    try {
        const AvailableRoomsByType = await RoomsService.AvailableRoomsByType(req.params.type);
        res.status(200);
        res.json(AvailableRoomsByType);
    }
    catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des chambres" });
    }
}

async function PricesBelow(req, res) {
    try {
        const PricesBelow = await RoomsService.PricesBelow(req.params.price);
        res.status(200);
        res.json(PricesBelow);
    }
    catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des chambres" });
    }
}

async function PricesBetween(req, res) {
    try {
        const PricesBetween = await RoomsService.PricesBetween(req.params.min, req.params.max);
        res.status(200);
        res.json(PricesBetween);
    }
    catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des chambres" });
    }
}

async function AddRoom(req, res) {
    try {
        const AddRoom = await RoomsService.AddRoom(req.body);
        res.status(201);
        res.json(AddRoom);
    }
    catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de l'ajout de la chambre" });
    }
}

async function UpdateRoom(req, res) {
    try {
        const UpdateRoom = await RoomsService.UpdateRoom(req.params.id, req.body);
        res.status(201);
        res.json(UpdateRoom);
    }
    catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la modification de la chambre" });
    }
}

async function DeleteRoom(req, res) {
    try {
        const DeleteRoom = await RoomsService.DeleteRoom(req.params.id);
        res.status(204);
        res.json(DeleteRoom);
    }
    catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la suppression de la chambre" });
    }
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
    AddRoom,
    UpdateRoom,
    DeleteRoom
}