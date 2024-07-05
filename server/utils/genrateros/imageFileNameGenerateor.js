const { v4: uuidv4 } = require('uuid');

/**
 * Generates a random image name using UUID v4 and the current timestamp.
 * @param {string} extension - The file extension for the image.
 * @returns {string} The generated image name.
 */
function generateRandomImageName(extension = 'jpg') {
    const uuid = uuidv4(); // Generate a UUID
    const timestamp = Date.now(); // Get the current timestamp
    return `${uuid}-${timestamp}.${extension}`;
}

module.exports = generateRandomImageName;
