const { body, validationResult } = require('express-validator');
const isEmail = require('../utils/Validate/isEmail');
const isPhoneNumber = require('../utils/Validate/isPhoneNumber');

exports.createContactValidator = [
    body('first_name').notEmpty().withMessage('First name is required'),
    body('last_name').notEmpty().withMessage('Last name is required'),
    body('email').notEmpty().withMessage('Email is required').bail().custom((em) => isEmail(em)).withMessage('Invalid email address'),
    body('phone_number').custom((ph) => isPhoneNumber(ph)).withMessage('Invalid phone number'),
    body('message').notEmpty().withMessage('Message is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
