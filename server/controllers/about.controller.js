const path = require('path');
const { readData, writeData } = require('../utils/fileUtils');

const dataFilePath = path.join(__dirname, '../data.json');

const getAboutMe = (req, res) => {
    try {
        const data = JSON.parse(readData(dataFilePath));
        res.json({aboutMe: data.aboutMe});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAboutMe = (req, res) => {
    try {
        const data = JSON.parse(readData(dataFilePath));
        data.aboutMe = req.body.aboutMe;
        writeData(dataFilePath, JSON.stringify(data, null, 2));
        res.json({ message: 'About Us section updated successfully', aboutMe: data.aboutMe });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAboutMe,
    updateAboutMe,
};
