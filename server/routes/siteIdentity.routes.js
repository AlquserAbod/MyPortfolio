// routes/siteIdentity.js
const express = require('express');
const { setSiteIdentity, getSiteIdentity } = require('../controllers/siteIdentity.controller.js');
const upload = require('../middleware/upload.middleware');
const router = express.Router();


router.post('', upload.fields([{ name: 'logo' }, { name: 'nobgLogo' }]), setSiteIdentity);
router.get('', getSiteIdentity);

module.exports = router;
