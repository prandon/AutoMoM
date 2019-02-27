const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const authController = require('../controllers/AuthController');

const auth = jwt({
    secret: 'MY_SECRET',
    userProperty: 'payload'
})

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;