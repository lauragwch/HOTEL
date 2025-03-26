const bcrypt = require('bcryptjs');
const authService = require('../services/authService');
const jwt = require('jsonwebtoken');

async function login(req, res) {
    try {
        const user = await authService.getUserByEmail(req.body.email);
        if (!user) {
            return res.status(404).json({ message: 'Email ou mot de passe incorrect' });
        }
        const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
        }


        // const token = authService.generateToken(user);
        res.status(200).json({ token: generateToken(user) });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur" });
    }
}

function generateToken(user) {
    return jwt.sign({
        id: user.id_client,
        email: user.email,
        prenom: user.first_name,
        nom: user.last_name,
        role: user.role
    },"SECRET" , {
        expiresIn: 86400 // 24 hours
    });
}

function verifyToken(req, res, next){
    const token = req.headers["authorization"];
    console.log(token);
    if (!token) {
        return res.status(403).json({ message: "Aucun token fourni" });
    }
    jwt.verify(token, "SECRET", (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Non autorisé" });
        }
        req.user = decoded;
        next();
    });
}

module.exports = {
    login,
    verifyToken
};