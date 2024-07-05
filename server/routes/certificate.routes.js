const express = require('express');
const router = express.Router();
const {
    createCertificate,
    getAllCertificates,
    getCertificateById,
    updateCertificateById,
    deleteCertificateById
} = require('../controllers/certificates.controller.js');
const { createCertificateValidator } = require('../validators/certificate.validator.js');

// Routes for certificates
router.post('/',createCertificateValidator, createCertificate);
router.get('/', getAllCertificates);
router.get('/:id', getCertificateById);
router.patch('/:id', updateCertificateById);
router.delete('/:id', deleteCertificateById);

module.exports = router;
