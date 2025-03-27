const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST /auth/login (route existante)
router.post('/login', (req, res) => {
    authController.login(req, res);
});

// Nouvelle route : POST /auth/forgot-password
router.post('/forgot-password', (req, res) => {
    authController.forgotPassword(req, res);
});

// Nouvelle route : PATCH /auth/reset-password/:token
router.patch('/reset-password/:token', (req, res) => {
    authController.resetPassword(req, res);
});

module.exports = router;