const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller.js');
const { createContactValidator } = require('../validators/contact.validator.js');

// Create a new contact
router.post('/', createContactValidator, contactController.createContact);

// Get all contacts
router.get('/', contactController.getAllContacts);

// Get a contact by ID
router.get('/:id', contactController.getContactById);

// Update a contact by ID
router.patch('/:id', contactController.updateContact);

// Delete a contact by ID
router.delete('/:id', contactController.deleteContact);

module.exports = router;
