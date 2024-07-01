const WebsiteData = require('../models/websiteData.model.js');

const setSiteIdentity = async (req, res) => {
  try {
    let data = await WebsiteData.findOne();
    let siteIdentity = data.siteIdentity;

    if (req.files) {
      if (req.files['logo']) {
        siteIdentity.logoUrl = `${process.env.SERVER_URL}/uploads/${req.files['logo'][0].filename}`;
      }

      if (req.files['nobgLogo']) {
        siteIdentity.nobgLogoUrl = `${process.env.SERVER_URL}/uploads/${req.files['nobgLogo'][0].filename}`;
      }
    }

    if (req.body.slogans) {
      const slogan = JSON.parse(req.body.slogans);
      Object.keys(slogan).forEach(lang => {
        if (slogan[lang]) {
          siteIdentity.slogan[lang] = slogan[lang];
        }
      });
    }

    if (req.body.jobTitles) {
      const jobTitle = JSON.parse(req.body.jobTitles);
      Object.keys(jobTitle).forEach(lang => {
        if (jobTitle[lang]) {
          siteIdentity.jobTitle[lang] = jobTitle[lang];
        }
      });
    }

    data.siteIdentity = siteIdentity;
    await data.save();

    res.status(201).json(data.siteIdentity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSiteIdentity = async (req, res) => {
  try {
    const data = await WebsiteData.findOne();
    res.json(data.siteIdentity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { setSiteIdentity, getSiteIdentity };
