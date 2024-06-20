const fs = require('fs');

// Utility function to read data from a file
const readData = (filePath, options = 'utf8') => {
    if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
    }
    return fs.readFileSync(filePath, options);
};

// Utility function to write data to a file
const writeData = (filePath, data, options = 'utf8') => {
    fs.writeFileSync(filePath, data, options);
};

module.exports = {
    readData,
    writeData,
};
