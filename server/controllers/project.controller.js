const Project = require('../models/Project.model.js'); // Adjust the path as necessary
const { uploadImageToFirebase } = require('../utils/firebase/upload.js');
const FIREBASE_IMAGE_SUB_DIRS = require('../constants/firebase_image_subDirs');

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
        const {
            name,
            short_description_en,
            short_description_tr,
            short_description_ar,
            description_en,
            description_tr,
            description_ar,
            visit_url,
            github_url,
            category
        } = req.body;

        let main_image_url = null;
        if (req.files.main_image) {
            main_image_url = await uploadImageToFirebase(req.files.main_image[0].buffer, req.files.main_image[0].originalname, FIREBASE_IMAGE_SUB_DIRS.MAIN_IMAGE);
        }

        const project_images_urls = [];
        if (req.files.project_images) {
            for (let i = 0; i < req.files.project_images.length; i++) {
                const image_url = await uploadImageToFirebase(req.files.project_images[i].buffer, req.files.project_images[i].originalname, FIREBASE_IMAGE_SUB_DIRS.PROJECT_IMAGES);
                project_images_urls.push(image_url);
            }
        }

        const newProject = new Project({
            name,
            short_description_en,
            short_description_tr,
            short_description_ar,
            description_en,
            description_tr,
            description_ar,
            visit_url,
            github_url,
            main_image: main_image_url,
            project_images: project_images_urls,
            category
        });

        await newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a project (PATCH)
exports.updateProject = async (req, res) => {
    try {
        const {
            name,
            short_description_en,
            short_description_tr,
            short_description_ar,
            description_en,
            description_tr,
            description_ar,
            visit_url,
            github_url,
            category
        } = req.body;

        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ error: 'Project not found' });

        if (name) project.name = name;
        if (short_description_en) project.short_description_en = short_description_en;
        if (short_description_tr) project.short_description_tr = short_description_tr;
        if (short_description_ar) project.short_description_ar = short_description_ar;
        if (description_en) project.description_en = description_en;
        if (description_tr) project.description_tr = description_tr;
        if (description_ar) project.description_ar = description_ar;
        if (visit_url) project.visit_url = visit_url;
        if (github_url) project.github_url = github_url;
        if (category) project.category = category;

        if (req.files.main_image) {
            project.main_image = await uploadImageToFirebase(req.files.main_image[0].buffer, req.files.main_image[0].originalname, FIREBASE_IMAGE_SUB_DIRS.MAIN_IMAGE);
        }

        if (req.files.project_images) {
            const project_images_urls = [];
            for (let i = 0; i < req.files.project_images.length; i++) {
                const image_url = await uploadImageToFirebase(req.files.project_images[i].buffer, req.files.project_images[i].originalname, FIREBASE_IMAGE_SUB_DIRS.PROJECT_IMAGES);
                project_images_urls.push(image_url);
            }
            project.project_images = project_images_urls;
        }

        await project.save();
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
