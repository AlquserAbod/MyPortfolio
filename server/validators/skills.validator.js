const { body,validationResult } = require('express-validator');
const { isValidURL } = require('../utils/validators');

exports.createSkillValidator = [
    body('name').notEmpty().withMessage('Name is required'),
    body('icon').notEmpty().withMessage('icon is required').bail()
    .custom((value) => {
        if (!isValidURL(value)) {
            throw new Error('icon must be a valid URL');
        }
        return true;
    }),
    body('proficiency').isInt({ min: 0, max: 100 }).withMessage('Proficiency must be an integer between 0 and 100'),
    body('category').notEmpty().withMessage('Category is required').bail().isMongoId().withMessage('Invalid category ID'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];