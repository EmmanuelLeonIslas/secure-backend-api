const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/authController');
const { profile } = require('../middlewares/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/profile', profile);

module.exports = router;