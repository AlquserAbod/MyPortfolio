const { body, validationResult } = require('express-validator');
const {isGitHubUrl, isValidURL} = require('../utils/validators');

const validateProject = [
    body('name').notEmpty().withMessage('Name is required'),
    body('short_description_en').notEmpty().withMessage('English short description is required'),
    body('short_description_tr').notEmpty().withMessage('Turkish short description is required'),
    body('short_description_ar').notEmpty().withMessage('Arabic short description is required'),
    body('description_en').notEmpty().withMessage('English description is required'),
    body('description_tr').notEmpty().withMessage('Turkish description is required'),
    body('description_ar').notEmpty().withMessage('Arabic description is required'),
    body('visit_url').optional().isURL().withMessage('Visit URL must be a valid URL'),
    body('category').notEmpty().withMessage('Category is required')
        .bail().isMongoId().withMessage('Invalid category ID'),

    body('main_image').notEmpty().withMessage('Main Image is required').bail()
    .custom((value) => {
        if (!isValidURL(value)) {
            throw new Error('Main Image must be a valid URL');
        }
        return true;
    }),
    // Validate project_images 
    body('project_images').notEmpty().withMessage('Project images is required').bail()
    .custom((value) => {
        for (let url of value) {
            if (!isValidURL(url)) {
                throw new Error(`${url} is not a valid URL`);
            }
        }
    
        // Return true if all URLs are valid
        return true;
    }),
    body('github_url')
        .optional()
        .isURL().withMessage('GitHub URL must be a valid URL')
        .bail()
        .custom(value => {
            if (!isGitHubUrl(value)) {
                throw new Error('GitHub URL must be a valid GitHub repository URL');
            }
            return true;
        }),

    // Check for validation errors
    (req, res, next) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = validateProject;
