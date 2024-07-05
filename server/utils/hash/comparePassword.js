const bcrypt = require('bcrypt');

const comparePassword = async (plainPassword, hashedPassword) => {
    try {
        const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
        return isMatch;
    } catch (error) {
        throw new Error('Password comparison failed');
    }
};

module.exports = comparePassword;
