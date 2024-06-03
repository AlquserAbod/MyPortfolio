const { body,validationResult } = require('express-validator');

exports.createSkillValidator = [
    body('name').notEmpty().withMessage('Name is required'),
    body('icon').custom((value, { req }) => {
        if (!req.file) {
            throw new Error('Icon is required');
        } else if (!req.file.mimetype.startsWith('image')) {
            throw new Error('Icon must be an image file');
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