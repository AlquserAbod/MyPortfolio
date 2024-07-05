const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller.js');
const { createCategoryValidator } = require('../validators/category.validator.js');

// Create a new category
router.post('/', createCategoryValidator, categoryController.createCategory);

// Get all categories
router.get('/', categoryController.getAllCategories);

// Get a category by ID
router.get('/:id', categoryController.getCategoryById);

// Update a category by ID
router.patch('/:id', categoryController.updateCategory);

// Delete a category by ID
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
