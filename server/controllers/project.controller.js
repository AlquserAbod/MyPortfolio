const Project = require('../models/project.model.js'); // Adjust the path as necessary

// Get all projects
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find().populate('category');
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get project by ID
exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id).populate('category');
        if (!project) return res.status(404).json({ error: 'Project not found' });
        res.json(project);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new project
exports.createProject = async (req, res) => {
    try {
        const newProject = new Project(req.body);

        await newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a project (PATCH)
exports.updateProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        res.json(project);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a project
exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if (!project) return res.status(404).json({ error: 'Project not found' });

        res.json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
