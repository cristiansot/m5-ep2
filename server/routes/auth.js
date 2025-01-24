const express = require('express');
const { login, protectedData } = require('../controllers/authController');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.post('/login', login);
router.get('/protected', verifyToken, protectedData);

module.exports = router;
