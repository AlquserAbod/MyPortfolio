const { body, validationResult } = require('express-validator');

// Validator middleware for creating a new category
exports.createCategoryValidator = [
    body('title_en').notEmpty().withMessage('Title (English) is required'),
    body('title_tr').notEmpty().withMessage('Title (Turkish) is required'),
    body('title_ar').notEmpty().withMessage('Title (Arabic) is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next(); // Move to the next middleware if no validation errors
    }
];