const clientsService = require('../services/clientsService');
const bcrypt = require('bcryptjs');
const transporter = require('../config/nodemail');
const jwt = require('jsonwebtoken');

async function allClients(req, res) {
    try {
        const allClients = await clientsService.allClients();
        res.status(200);
        res.json(allClients);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des clients" });
    }
}

async function oneClient(req, res) {
    try {
        const oneClient = await clientsService.oneClient(req.params.id);
        res.status(200);
        res.json(oneClient);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération du client" });
    }
}

async function clientsByYear(req, res) {
    try {
        const clientsByYear = await clientsService.clientsByYear(req.params.year);
        res.status(200);
        res.json(clientsByYear);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des clients" });
    }
}

async function totalCostAbove(req, res) {
    try {
        const totalCostAbove = await clientsService.totalCostAbove(req.params.price);
        res.status(200);
        res.json(totalCostAbove);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des clients" });
    }
}

async function clientsByRegistrationDate(req, res) {
    try {
        const clientsByRegistrationDate = await clientsService.clientsByRegistrationDate(req.params.month, req.params.year);
        res.status(200);
        res.json(clientsByRegistrationDate);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des clients" });
    }
}

async function clientsByCheckInDate(req, res) {
    try {
        const clientsByCheckInDate = await clientsService.clientsByCheckInDate(req.params.month, req.params.year);
        res.status(200);
        res.json(clientsByCheckInDate);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des clients" });
    }
}

async function clientsByRoomType(req, res) {
    try {
        const clientsByRoomType = await clientsService.clientsByRoomType(req.params.roomType);
        res.status(200);
        res.json(clientsByRoomType);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des clients" });
    }
}

async function maxAmountSpent(req, res) {
    try {
        const maxAmountSpent = await clientsService.maxAmountSpent();
        res.status(200);
        res.json(maxAmountSpent);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération des clients" });
    }
}

async function addClient(req, res) {
    try {
        // Crypter le mot de passe
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        
        const newClient = await clientsService.addClient(req.body);
        res.status(201);
        res.json(newClient);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de l'ajout du client" });
    }
}
async function updateClient(req, res) {
    try {
        const updatedClient = await clientsService.updateClient(req.params.id, req.body);
        res.status(200);
        res.json(updatedClient);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la modification du client" });
    }
}

async function deleteClient(req, res) {
    try {
        if (req.user.role !== 'ADMIN') {
            return res.status(403).json({ message: "Vous n'êtes pas autorisé à effectuer cette action" });
        }
        const deletedClient = await clientsService.deleteClient(req.params.id);
        res.status(204);
        res.json(deletedClient);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la suppression du client" });
    }
}

async function findMe(req, res) {
    try {
    const client = await clientsService.oneClient(req.user.id);
    res.status(200);
    res.json(client);
    }
    catch (error) {
    console.error(error);
    res.status(500);
    res.json({ "message": "Une erreur est survenue lors de la récupération du client" });
    }
    }


    async function passwordForget(req, res) {
        try {
            console.log(req.body.email.email);
            const client = await clientsService.findClientByEmail(req.body.email);

            console.log(client);
            if (!client) {
                return res.status(404).json({ message: 'Aucun utilisateur trouvé avec cet email' });
            }
            const token = jwt.sign({ id: client.id_client}, "SECRET", { expiresIn: '1h' });
            await transporter.sendMail({
                from: 'GENDRAULT Laura <lauragendrault@gmail.com',
                to: client.email,
                subject: 'Réinitialisation du mot de passe',
                text: `Cliquez sur ce lien pour réinitialiser votre mot de passe: http://localhost:5173/reset-password/${token}`
            });
            res.status(200).json({ message: 'Un email vous a été envoyé pour réinitialiser votre mot de passe' });
        } catch (error) {
            console.error(error);
            res.status(500);
            res.json({ "message": "Une erreur est survenue lors de la récupération" });
        }
    }

async function passwordReset(req, res) {
    console.log(req.user);
    try {
        const client = await clientsService.updateClient(req.user.id, { password: bcrypt.hashSync(req.body.password, 10) });
        res.status(200);
        res.json(client);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ "message": "Une erreur est survenue lors de la récupération du client" });
    }
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
    findMe,
    passwordForget,
    passwordReset
};