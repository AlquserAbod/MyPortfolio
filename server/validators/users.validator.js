const { body, validationResult } = require('express-validator');
const {isEmail} = require('../utils/validators');

const password_min_character = 8

exports.createUserValidator = [
    body('first_name').notEmpty().withMessage('First name is required').isString(),
    body('last_name').notEmpty().withMessage('Last name is required').isString(),
    body('profile_pic').optional().custom((value, { req }) => {
        if (req.file) {
            if (!req.file.mimetype.startsWith('image')) {
                throw new Error('Profile picture must be an image file');
            }
        }
        return true; 
    }),
    body('email').notEmpty().withMessage('Email is required').bail().custom((value) => {
        if (!isEmail(value)) {
            throw new Error('Invalid email address');
        }
        return true;
    }),
    body('password').notEmpty().withMessage('Password is required').bail()
    .isLength({ min: password_min_character }).withMessage(`Password must be at least ${password_min_character} characters long`),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];