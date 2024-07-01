// models/WebsiteData.js
const mongoose = require('mongoose');

const sloganSchema = new mongoose.Schema({
  ar: String,
  tr: String,
  en: String,
});

const jobTitleSchema = new mongoose.Schema({
  ar: String,
  tr: String,
  en: String,
});

const siteIdentitySchema = new mongoose.Schema({
  logoUrl: String,
  nobgLogoUrl: String,
  slogan: sloganSchema,
  jobTitle: jobTitleSchema,
});

const socialLinksSchema = new mongoose.Schema({
  facebook: String,
  instagram: String,
  linkedin: String,
  youtube: String,
  github: String,
});

const websiteDataSchema = new mongoose.Schema({
  siteIdentity: siteIdentitySchema,
  socialLinks: socialLinksSchema,
  aboutMe: String,
});

const WebsiteData = mongoose.model('WebsiteData', websiteDataSchema);

module.exports = WebsiteData;
