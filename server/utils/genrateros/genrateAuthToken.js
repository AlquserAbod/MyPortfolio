const jwt = require('jsonwebtoken');

exports.generateAccessToken = (user) => {
    return jwt.sign(user, process.env.SECRET_KEY, { expiresIn: '1h' });
};

exports.generateRefreshToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_SECRET_KEY, { expiresIn: '1y' }); // Extended expiry
};
