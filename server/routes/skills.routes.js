const express = require('express');
const router = express.Router();

const skillsController = require('../controllers/Skills.controller.js');
const upload = require('../middleware/upload.middleware.js');
const { createSkillValidator } = require('../validators/skills.validator.js')


// Routes
router.post('/',upload.single('icon'), createSkillValidator, skillsController.createSkill);

router.get('/', skillsController.getAllSkills);

router.get('/:id', skillsController.getSkillById);

router.patch('/:id',upload.single('icon'), skillsController.updateSkill);

router.delete('/:id', skillsController.deleteSkill);

module.exports = router;
