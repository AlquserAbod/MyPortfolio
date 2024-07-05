const path = require('path');

/**
 * Extracts the file extension from a file name.
 * @param {string} fileName - The name of the file.
 * @returns {string} The file extension.
 */
function getFileExtension(fileName) {
    return path.extname(fileName).slice(1); // Remove the dot from the extension
}

module.exports = getFileExtension ;
