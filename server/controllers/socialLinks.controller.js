const path = require('path');
const { readData, writeData } = require('../utils/fileUtils');

const dataFilePath = path.join(__dirname, '../data.json');

const getSocialLinks = (req, res) => {
    try {
        const data = JSON.parse(readData(dataFilePath));
        res.json(data.socialLinks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateSocialLinks = (req, res) => {
    try {
        const data = JSON.parse(readData(dataFilePath));
        const socialLinksUpdates = req.body;

        // Merge the incoming updates with the existing social links
        data.socialLinks = {
            ...data.socialLinks,
            ...socialLinksUpdates,
        };

        writeData(dataFilePath, JSON.stringify(data, null, 2));
        res.json({ message: 'Social links updated successfully', socialLinks: data.socialLinks });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getSocialLinks,
    updateSocialLinks,
};
