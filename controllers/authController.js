const bcrypt = require('bcryptjs');
const authService = require('../services/authService');
const jwt = require('jsonwebtoken');

// Contrôleur pour la connexion (inchangé)
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
        res.status(200).json({ token: generateToken(user) });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur" });
    }
}

// Générer un token JWT (inchangé)
function generateToken(user) {
    return jwt.sign({
        id: user.id_client,
        email: user.email,
        prenom: user.first_name,
        nom: user.last_name,
        role: user.role
    }, "SECRET", {
        expiresIn: 86400 // 24 hours
    });
}

// Vérifier un token JWT (inchangé)
function verifyToken(req, res, next) {
    const token = req.headers["authorization"];
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

// Contrôleur pour "Mot de passe oublié"
async function forgotPassword(req, res) {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ message: 'L\'email est requis.' });
        }
        await authService.forgotPassword(email);
        res.status(200).json({ message: 'Un email de réinitialisation a été envoyé.' });
    } catch (error) {
        console.error('Erreur dans forgotPassword:', error);
        res.status(500).json({ message: error.message });
    }
}

// Contrôleur pour réinitialiser le mot de passe
async function resetPassword(req, res) {
    try {
        const { token } = req.params;
        const { password } = req.body;
        if (!password) {
            return res.status(400).json({ message: 'Le mot de passe est requis.' });
        }
        await authService.resetPassword(token, password);
        res.status(200).json({ message: 'Mot de passe réinitialisé avec succès.' });
    } catch (error) {
        console.error('Erreur dans resetPassword:', error);
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    login,
    verifyToken,
    forgotPassword,
    resetPassword
};