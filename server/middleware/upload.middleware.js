const multer = require('multer');
const path = require('path');

// Set up multer for file uploads with disk storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Specify the destination directory for uploaded files
        cb(null, 'uploads/');
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
