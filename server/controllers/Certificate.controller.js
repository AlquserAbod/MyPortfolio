const Certificate = require('../models/Certificate.model.js');

// Controller to create a new certificate
const createCertificate = async (req, res) => {
    try {
        const certificate = new Certificate(req.body);
        await certificate.save();
        res.status(201).send(certificate);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Controller to get all certificates
const getAllCertificates = async (req, res) => {
    try {
        const certificates = await Certificate.find();
        res.send(certificates);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Controller to get a single certificate by ID
const getCertificateById = async (req, res) => {
    try {
        const certificate = await Certificate.findById(req.params.id);
        if (!certificate) {
            return res.status(404).send({ error: 'Certificate not found' });
        }
        res.send(certificate);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Controller to update a certificate by ID
const updateCertificateById = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['image', "taken_date", "from"]; // Add more fields as needed
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const certificate = await Certificate.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!certificate) {
            return res.status(404).send({ error: 'Certificate not found' });
        }

        res.send(certificate);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Controller to delete a certificate by ID
const deleteCertificateById = async (req, res) => {
    try {
        const certificate = await Certificate.findByIdAndDelete(req.params.id);
        if (!certificate) {
            return res.status(404).send({ error: 'Certificate not found' });
        }
        res.send(certificate);
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = {
    createCertificate,
    getAllCertificates,
    getCertificateById,
    updateCertificateById,
    deleteCertificateById
};
