const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload.middleware.js'); // Assuming the upload middleware is in the middleware directory
const projectController = require('../controllers/project.controller');
const validateProject = require('../validators/project.validator');

router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getProjectById);
router.post('/' , validateProject, projectController.createProject);
router.patch('/:id',  projectController.updateProject);
router.delete('/:id', projectController.deleteProject);

module.exports = router;