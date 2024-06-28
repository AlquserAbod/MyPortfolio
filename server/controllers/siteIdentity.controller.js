// controllers/siteIdentityController.js
const { log } = require('console');
const { readData, writeData } = require('../utils/fileUtils');
const path = require('path');

const dataFilePath = path.join(__dirname, '../tmp/data.json');

const setSiteIdentity = (req, res) => {
  try {
    let data = JSON.parse(readData(dataFilePath));
    let siteIdentity = data.siteIdentity;

    console.log(req.body);
    // Update logoUrl if 'logo' file is uploaded
    if(req.files) {
      if (req.files['logo']) {
        siteIdentity.logoUrl = `${process.env.SERVER_URL}/uploads/${req.files['logo'][0].filename}`;
      }
  
      // Update nobgLogoUrl if 'nobgLogo' file is uploaded
      if (req.files['nobgLogo']) {
        siteIdentity.nobgLogoUrl = `${process.env.SERVER_URL}/uploads/${req.files['nobgLogo'][0].filename}`;
      }
    }

    // Update slogan for specified languages
    if (req.body.slogans) {
      const slogan = JSON.parse(req.body.slogans);
      Object.keys(slogan).forEach(lang => {
        if (slogan[lang]) {
          siteIdentity.slogan[lang] = slogan[lang];
        }
      });
    }

    // Update jobTitle for specified languages
    if (req.body.jobTitles) {
      const jobTitle = JSON.parse(req.body.jobTitles);
      Object.keys(jobTitle).forEach(lang => {
        if (jobTitle[lang]) {
          siteIdentity.jobTitle[lang] = jobTitle[lang];
        }
      });
    }

    data.siteIdentity = siteIdentity;

    writeData(dataFilePath, JSON.stringify(data,null,2));

    res.status(201).json(data.siteIdentity);
  } catch (error) {
    console.log("error on set site identity controller :", error);
    res.status(500).json({ message: error.message });
  }
};

const getSiteIdentity = (req, res) => {
  try {
    const data = readData(dataFilePath);
    res.json(JSON.parse(data).siteIdentity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { setSiteIdentity, getSiteIdentity };