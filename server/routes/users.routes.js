const express = require('express');

const router = express.Router();

const userController = require('../controllers/user.controller.js');
const { createUserValidator } = require('../validators/users.validator.js');
const upload = require('../middleware/upload.middleware.js');

// Create a new user
router.post('/',createUserValidator, userController.createUser);

// Get all users
router.get('/', userController.getAllUsers);

// Get a user by ID
router.get('/:id', userController.getUserById);


// Update a user by ID (PATCH for partial update)
router.patch('/:id',userController.updateUser);

// Delete a user by ID
router.delete('/:id', userController.deleteUserById);

module.exports = router;
