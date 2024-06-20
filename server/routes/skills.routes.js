const express = require('express');
const router = express.Router();

const skillsController = require('../controllers/skill.controller.js');
const upload = require('../middleware/upload.middleware.js');
const { createSkillValidator } = require('../validators/skills.validator.js')


// Routes
router.post('/', createSkillValidator, skillsController.createSkill);

router.get('/', skillsController.getAllSkills);

router.get('/:id', skillsController.getSkillById);

router.patch('/:id', skillsController.updateSkill);

router.delete('/:id', skillsController.deleteSkill);

module.exports = router;
