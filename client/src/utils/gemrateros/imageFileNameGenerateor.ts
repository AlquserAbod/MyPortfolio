import { v4 as uuidv4 } from 'uuid'; // Import UUID v4 as namespace alias

/**
 * Generates a random image name using UUID v4 and the current timestamp.
 * @param {string} extension - The file extension for the image.
 * @returns {string} The generated image name.
 */
function generateRandomImageName(extension: string) {
    const uuid = uuidv4(); // Generate a UUID
    const timestamp = Date.now(); // Get the current timestamp
    return `${uuid}-${timestamp}.${extension}`;
}

module.exports = generateRandomImageName;
