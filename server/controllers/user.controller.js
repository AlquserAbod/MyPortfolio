const User = require('../models/Users.model.js');
const hashPassword = require('../utils/hash/hashPassword.js');

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const { first_name, last_name, email, password, profile_pic } = req.body;
        
        const hashedPassword = await hashPassword(password);
        
        const user = new User({
            first_name,
            last_name,
            email,
            password: hashedPassword,
            profile_pic
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
