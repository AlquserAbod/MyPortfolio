const express = require('express');
const router = express.Router();
const { getSocialLinks, updateSocialLinks } = require('../controllers/socialLinks.controller');

router.get('/', getSocialLinks);
router.put('/', updateSocialLinks);

module.exports = router;
