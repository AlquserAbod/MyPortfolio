const { isValidURL, isValidDateFormat } = require("../utils/validators");
const { body, validationResult } = require('express-validator');

const createCertificateValidator = [
    body("from").notEmpty().withMessage("from field is required"),
    body('taken_date').notEmpty().withMessage('taken date is required')
        .bail().custom((value) => {
            if (!isValidDateFormat(value)) {
                throw new Error('Invalid date format, use YYYY-MM-DD');
            }
            return true;
        }),
    body('image')
        .notEmpty().withMessage('Image URL is required')
        .bail().custom(value => {
            if (!isValidURL(value)) {
                throw new Error('Invalid image URL');
            }
            return true;
        }),
    
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next(); // Move to the next middleware if no validation errors
    }
];

module.exports = { createCertificateValidator }