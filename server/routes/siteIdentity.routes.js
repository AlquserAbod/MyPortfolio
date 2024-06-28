// routes/siteIdentity.js
const express = require('express');
const multer = require('multer');
const { setSiteIdentity, getSiteIdentity } = require('../controllers/siteIdentity.controller.js');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload.middleware');
const router = express.Router();


router.post('',  auth, upload.fields([{ name: 'logo' }, { name: 'nobgLogo' }]), setSiteIdentity);
router.get('', getSiteIdentity);

module.exports = router;
