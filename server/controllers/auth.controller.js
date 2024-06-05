const User = require("../models/users.model");
const { generateAccessToken, generateRefreshToken } = require("../utils/genrateros/genrateAuthToken");
const comparePassword = require("../utils/hash/comparePassword");
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Fetch user by email
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Compare provided password with the hashed password stored in the database
        const isPasswordValid = await comparePassword(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // get user whitout password
        const userWhitoutPassword = { ...user };
        delete userWhitoutPassword.password;
        
        // Generate tokens
        const accessToken = generateAccessToken(userWhitoutPassword._doc);
        const refreshToken = generateRefreshToken(userWhitoutPassword._doc);

        res.json({ accessToken, refreshToken });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.refreshToken = async (req,res) => {
    const { token:refreshToken } = req.body;

    if (! refreshToken) {
        return res.status(401).json({ message: "No refresh token provided" });
    }

    try {
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET_KEY);

        const user = await User.findById(decoded._id);
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        const userWhitoutPassword = { ...user };
        delete userWhitoutPassword.password;
        

        const newAccessToken = generateAccessToken(userWhitoutPassword._doc);
        const newRefreshToken = generateRefreshToken(userWhitoutPassword._doc);
        
        res.json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: "Invalid or expired refresh token" });
    }
}

exports.verifyToken = (req,res) => {
    res.json({ success: true,  user: req.user });
}

exports.me = async (req,res) => {
    try {
        return res.status(200).json(req.user)
    } catch (error) {
        console.log("error on me controller :",error);
        res.status(500).json({ message: 'Server error' });
    }
}