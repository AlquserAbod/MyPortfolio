const Category = require('../models/category.model.js');
const Certificate = require('../models/certification.model.js/index.js');
const Contact = require('../models/contact.model.js');
const Project = require('../models/project.model.js');
const Skill = require('../models/skill.model.js');
const User = require('../models/users.model.js');

const getCategoriesStatistics = async (req, res) => {
  try {
    const totalCount = await Category.countDocuments();
    const categories = await Project.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 3 },
      {
        $lookup: {
          from: 'categories',
          localField: '_id',
          foreignField: '_id',
          as: 'categoryDetails',
        },
      },
      {
        $project: {
          _id: 0, 
          totalCount: '$count', 
          category: {
            $arrayElemAt: ['$categoryDetails', 0], 
          },
        },
      },
    ]);    res.json({ totalCount, categories });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCertificatesStatistics = async (req, res) => {
  try {
    const totalCount = await Certificate.countDocuments();
    const latestCertificate = await Certificate.findOne().sort({ taken_date: -1 });
    res.json({ totalCount, latestCertificate });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSkillsStatistics = async (req, res) => {
  try {
    const totalCount = await Skill.countDocuments();
    const skills = await Skill.find().select('name icon');
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
