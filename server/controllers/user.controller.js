const FIREBASE_IMAGE_SUB_DIRS = require('../constants/firebase_image_subDirs.js');
const User = require('../models/users.model.js');
const { uploadImageToFirebase } = require('../utils/firebase/upload.js');
const hashPassword = require('../utils/hash/hashPassword.js');

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const { first_name, last_name, email, password } = req.body;
        const profilePic = req.file;

        let profilePicUrl = null;

        if (profilePic) {
            profilePicUrl = await uploadImageToFirebase(profilePic.buffer, profilePic.originalname,FIREBASE_IMAGE_SUB_DIRS.PROFILE_PIC);
        }
    
        const hashedPassword = await hashPassword(password);
        
        const user = new User({
            first_name,
            last_name,
            email,
            password: hashedPassword,
            profile_pic: profilePicUrl
        });

        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        console.log("error in getAllUsers Controller :", error);
        res.status(500).send(error);
    }
};

// Get a user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a contact by ID
exports.updateUser = async (req, res) => {
    try {
        const updatedData = req.body;
        const profilePic = req.file;

        console.log(profilePic);
        
        let profilePicUrl = null;

        if (profilePic) {
            profilePicUrl = await uploadImageToFirebase(profilePic.buffer, profilePic.originalname, FIREBASE_IMAGE_SUB_DIRS.PROFILE_PIC);
            updatedData.profile_pic = profilePicUrl;
        }

        const user = await User.findOneAndUpdate({_id:req.params.id}, updatedData, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a user by ID
exports.deleteUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
};
