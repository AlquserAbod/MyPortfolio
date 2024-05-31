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
        delete user.password;
        
        // Generate tokens
        const accessToken = generateAccessToken(userWhitoutPassword);
        const refreshToken = generateRefreshToken(userWhitoutPassword);

        res.json({ accessToken, refreshToken });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.refreshToken = async (req,res) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        return res.status(401).json({ message: "No refresh token provided" });
    }

    try {
        const decoded = jwt.verify(refreshToken, REFRESH_SECRET_KEY);

        const user = await User.findOne({ email: decoded.email });
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        const newAccessToken = generateAccessToken(decoded);
        const newRefreshToken = generateRefreshToken(decoded);
        
        res.json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired refresh token" });
    }
}

exports.verifyToken = (req,res) => {
    res.json({ success: true,  user: req.user });
}

exports.me = async (req,res) => {
    try {
        const user = await User.findOne({ email: req.user.email }).select('-password'); // Exclude password from the result
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}