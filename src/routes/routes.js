const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/usuarios');

router.post('/users', UserController.createUser);
router.get('/users/:id', UserController.readUser);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

module.exports = router;