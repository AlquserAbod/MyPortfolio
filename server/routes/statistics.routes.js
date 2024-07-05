const express = require('express');
const router = express.Router();
const {
  getCategoriesStatistics,
  getCertificatesStatistics,
  getSkillsStatistics,
  getProjectsStatistics,
  getUsersStatistics,
  getContactsStatistics,
} = require('../controllers/statistics.controller');

// Categories statistics
router.get('/categories', getCategoriesStatistics);

// Certificates statistics
router.get('/certificates', getCertificatesStatistics);

// Skills statistics
router.get('/skills', getSkillsStatistics);

// Projects statistics
router.get('/projects', getProjectsStatistics);

// Users statistics
router.get('/users', getUsersStatistics);

// Contacts statistics
router.get('/contacts', getContactsStatistics);

module.exports = router;
