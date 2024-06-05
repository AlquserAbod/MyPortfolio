const jwt = require('jsonwebtoken');
const User = require('../models/users.model.js'); // Replace with your user model import

const auth = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.sendStatus(401); // Unauthorized
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded._id; // Assuming user ID is stored in `_id` field

    // Find user by ID using async/await for cleaner handling
    const user = await User.findById(userId);
    if (!user) {
      return res.sendStatus(403); // Forbidden if user not found
    }

    req.user = user;
    next();
  } catch (err) {
    console.error('Error verifying JWT or finding user:', err.message);
    return res.sendStatus(403); // Generic error handling for now
  }
};

module.exports = auth;
