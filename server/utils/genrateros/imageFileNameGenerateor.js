const { v4: uuidv4 } = require('uuid');

/**
 * Generates a random image name using UUID v4.
 * @param {string} prefix - The prefix for the image name.
 * @param {string} extension - The file extension for the image.
 * @returns {string} The generated image name.
 */
function generateRandomImageName(prefix = 'profilePic', extension = 'jpg') {
    const uuid = uuidv4(); // Generate a UUID
    return `${prefix}_${uuid}.${extension}`;
}

module.exports = generateRandomImageName;
