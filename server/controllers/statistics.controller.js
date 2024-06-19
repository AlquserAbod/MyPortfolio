const Category = require('../models/category.model.js');
const Certificate = require('../models/Certificate.model.js');
const Contact = require('../models/contact.model.js');
const Project = require('../models/Project.model.js');
const Skill = require('../models/Skills.model.js');
const User = require('../models/Users.model.js');

const getCategoriesStatistics = async (req, res) => {
  try {
    const totalCount = await Category.countDocuments();
    const categories = await Category.find().limit(5).sort({ createdAt: -1 });
    res.json({ totalCount, categories });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCertificatesStatistics = async (req, res) => {
  try {
    const totalCount = await Certificate.countDocuments();
    const latestCertificates = await Certificate.find().limit(1).sort({ createdAt: -1 });
    res.json({ totalCount, latestCertificates });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSkillsStatistics = async (req, res) => {
  try {
    const totalCount = await Skill.countDocuments();
    const skills = await Skill.find().select('name icon').limit(5);
    res.json({ totalCount, skills });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProjectsStatistics = async (req, res) => {
  try {
    const totalCount = await Project.countDocuments();
    const latestProject = await Project.findOne().sort({ createdAt: -1 }).populate('category');
    res.json({ totalCount, latestProject });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUsersStatistics = async (req, res) => {
  try {
    const totalCount = await User.countDocuments();
    res.json({ totalCount });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getContactsStatistics = async (req, res) => {
  try {
    const totalContacts = await Contact.countDocuments();
    const unreadContacts = await Contact.countDocuments({ readed: false });
    res.json({ totalContacts, unreadContacts });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getCategoriesStatistics,
  getCertificatesStatistics,
  getSkillsStatistics,
  getProjectsStatistics,
  getUsersStatistics,
  getContactsStatistics,
};
