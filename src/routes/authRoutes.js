const express = require('express');
const router = express.Router();
const { login, profile, register } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.get('/profile', profile);

module.exports = router;