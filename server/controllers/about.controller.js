const WebsiteData = require('../models/websiteData.model.js');

const getAboutMe = async (req, res) => {
  try {
    const data = await WebsiteData.findOne();
    res.json({ aboutMe: data.aboutMe });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateAboutMe = async (req, res) => {
  try {
    const data = await WebsiteData.findOne();
    data.aboutMe = req.body.aboutMe;
    await data.save();
    res.json({ message: 'About Us section updated successfully', aboutMe: data.aboutMe });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAboutMe,
  updateAboutMe,
};
