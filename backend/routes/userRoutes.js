const express = require('express');
const router = express.Router();

const { register, login, isAdmin } = require('../controllers/userController');
const {isAuthenticated} = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/auth/me', isAuthenticated, isAdmin);

module.exports = router;
