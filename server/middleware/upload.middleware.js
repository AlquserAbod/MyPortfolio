const multer = require('multer');
const path = require('path');
const generateRandomImageName = require('../utils/genrateros/imageFileNameGenerateor');

// Set up multer for file uploads with disk storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Specify the destination directory for uploaded files
        cb(null, 'public/uploads/');
    },
    filename: function (req, file, cb) {
        const extension = path.extname(file.originalname).slice(1);
        const filename = generateRandomImageName(extension);
        cb(null, filename);
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
