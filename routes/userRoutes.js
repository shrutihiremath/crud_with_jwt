const express = require('express');
const router = express.Router();
const userController = require('../app/api/controllers/userController');
router.post('/register', userController.createUser);
router.post('/authenticate', userController.authenticate);
module.exports = router;