const express = require('express');
const router = express.Router();
const { getAboutMe, updateAboutMe } = require('../controllers/about.controller');

router.get('/', getAboutMe);
router.put('/', updateAboutMe);

module.exports = router;
