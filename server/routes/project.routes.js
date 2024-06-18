const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload.middleware.js'); // Assuming the upload middleware is in the middleware directory
const projectController = require('../controllers/project.controller');
const validateProject = require('../validators/project.validator');

router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getProjectById);
router.post('/',upload.fields([
  { name: 'main_image', maxCount: 1 },
  { name: 'project_images', maxCount: 5 } // Adjust maxCount as needed
  ]),validateProject, projectController.createProject);
router.patch('/:id', upload.fields([
  { name: 'main_image', maxCount: 1 },
  { name: 'project_images' }
]), projectController.updateProject);
router.delete('/:id', projectController.deleteProject);

module.exports = router;