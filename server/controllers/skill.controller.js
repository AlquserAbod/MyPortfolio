const Skills = require('../models/skill.model.js');

// Create a new skill
exports.createSkill = async (req, res) => {
    try {
        const skill = new Skills(req.body);
        await skill.save();
        res.status(201).json(skill);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all skills
exports.getAllSkills = async (req, res) => {
    try {
        const skills = await Skills.find().populate('category');
        res.status(200).json(skills);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a single skill by ID
exports.getSkillById = async (req, res) => {
    try {
        const skill = await Skills.findById(req.params.id).populate('category');
        if (!skill) {
            return res.status(404).json({ message: 'Skill not found' });
        }
        res.status(200).json(skill);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Update a skill by ID
exports.updateSkill = async (req, res) => {
    try {

        const skill = await Skills.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!skill) {
            return res.status(404).json({ message: 'Skill not found' });
        }
        res.status(200).json(skill);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a skill by ID
exports.deleteSkill = async (req, res) => {
    try {
        const skill = await Skills.findByIdAndDelete(req.params.id);
        if (!skill) {
            return res.status(404).json({ message: 'Skill not found' });
        }
        res.status(200).json({ message: 'Skill deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
