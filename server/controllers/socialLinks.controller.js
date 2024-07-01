const WebsiteData = require('../models/websiteData.model.js');

const getSocialLinks = async (req, res) => {
  try {
    const data = await WebsiteData.findOne();
    res.json(data.socialLinks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSocialLinks = async (req, res) => {
  try {
    const data = await WebsiteData.findOne();
    const socialLinksUpdates = req.body;
    data.socialLinks = { ...data.socialLinks, ...socialLinksUpdates };
    await data.save();
    res.json({ message: 'Social links updated successfully', socialLinks: data.socialLinks });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSocialLinks,
  updateSocialLinks,
};
