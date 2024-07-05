const User = require("../models/users.model");
const { generateAccessToken, generateRefreshToken } = require("../utils/genrateros/genrateAuthToken");
const comparePassword = require("../utils/hash/comparePassword");
const jwt = require('jsonwebtoken');
const sendEmail = require("../utils/sendEmail");
const { readEmailTemplate } = require("../utils/read_email_templates");
const bcrypt = require('bcrypt');

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
        console.error("error on login controller :", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.refreshToken = async (req,res) => {
    const { token: refreshToken } = req.body;

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
        console.log("error on refresh token controller :", error);
        return res.status(401).json({ message: "Invalid or expired refresh token" });
    }
}

exports.verifyToken = (req,res) => res.json({ success: true,  user: req.user });

exports.me = async (req,res) => {
    try {
        return res.status(200).json(req.user)
    } catch (error) {
        console.log("error on me controller :",error);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.forgetPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Generate a reset token
        const resetToken = jwt.sign({ id: user._id }, process.env.RESET_PASSWORD_SECRET_KEY,   { expiresIn: '10m' } );

        // Send reset email
        const resetLink = `${process.env.APP_URL}/dashboard/reset-password/${resetToken}`;
        const mailOptions = {
            to: user.email,
            from: process.env.EMAIL_USER,
            subject: 'Password Reset',
            html: readEmailTemplate('passwordResetEmail', {
                first_name: user.first_name,
                resetLink
            })
        };

        await sendEmail(mailOptions);

        res.json({ message: 'Password reset email sent' });
    } catch (error) {
        console.log("error on forget password contrller:", error);
        res.status(500).json({ message: 'Server error' });
}
};

// Reset password function
exports.resetPassword = async (req, res) => {
    const { newPassword } = req.body;
    const { token } = req.params
    try {
        const decoded = jwt.verify(token, process.env.RESET_PASSWORD_SECRET_KEY);
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Hash the new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        user.password = hashedPassword;
        await user.save();

        res.json({ message: 'Password has been reset' });
    } catch (error) {
        console.log("error on reset password controller :", error);
        res.status(500).json({ message: 'Server error' });
    }
};
