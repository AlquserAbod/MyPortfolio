const { check, validationResult } = require('express-validator');
const isGitHubUrl = require('../utils/Validate/isGithubUrl');

const validateProject = [
    check('name').not().isEmpty().withMessage('Name is required'),
    check('short_description_en').not().isEmpty().withMessage('English short description is required'),
    check('short_description_tr').not().isEmpty().withMessage('Turkish short description is required'),
    check('short_description_ar').not().isEmpty().withMessage('Arabic short description is required'),
    check('description_en').not().isEmpty().withMessage('English description is required'),
    check('description_tr').not().isEmpty().withMessage('Turkish description is required'),
    check('description_ar').not().isEmpty().withMessage('Arabic description is required'),
    check('visit_url').optional().isURL().withMessage('Visit URL must be a valid URL'),
    check('github_url')
    .optional()
    .isURL().withMessage('GitHub URL must be a valid URL')
    .bail()
    .custom(value => {
        if (!isGitHubUrl(value)) {
            throw new Error('GitHub URL must be a valid GitHub repository URL');
        }
        return true;
    }),    check('category').not().isEmpty().withMessage('Category is required'),
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
