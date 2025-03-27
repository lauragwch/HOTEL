const connection = require('../config/bdd');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');


// Récupérer un utilisateur par email
async function getUserByEmail(email) {
    const response = await connection.promise().query('SELECT * FROM clients WHERE email = ?', [email]);
    return response[0][0];
}

// Réinitialiser le mot de passe avec un token
async function resetPassword(token, newPassword) {
    try {
        // Vérifier si le token est valide et non expiré
        const [rows] = await connection.promise().query(
            'SELECT * FROM password_reset_tokens WHERE token = ? AND expires_at > NOW()',
            [token]
        );
        const resetToken = rows[0];
        if (!resetToken) {
            throw new Error('Token invalide ou expiré.');
        }

        // Vérifier le JWT
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.userId;

        // Hacher le nouveau mot de passe
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Mettre à jour le mot de passe dans la table clients
        await connection.promise().query(
            'UPDATE clients SET password = ? WHERE id_client = ?',
            [hashedPassword, userId]
        );

        // Supprimer le token utilisé
        await connection.promise().query(
            'DELETE FROM password_reset_tokens WHERE token = ?',
            [token]
        );
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getUserByEmail,
    resetPassword,
};
