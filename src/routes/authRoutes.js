const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const { login, register, profile } = require('../controllers/authController');
const { authMiddleware } = require('../middlewares/authMiddleware');

router.post(
  '/register',
  [
    body('email').isEmail().normalizeEmail(),
    body('password').isString().isLength({ min: 6 }),
  ],
  register,
);
router.post('/login', login);
router.get('/profile', authMiddleware, profile);

module.exports = router;
