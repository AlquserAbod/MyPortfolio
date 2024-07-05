const Contact = require('../models/contact.model.js');
const { readEmailTemplate } = require('../utils/read_email_templates.js');
const sendEmail = require('../utils/sendEmail.js');

// Create a new contact
exports.createContact = async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();

        const emailOptions = {
            to: 'alquser.help@gmail.com', // Replace with your email address
            subject: 'New Contact Form Submission',
            html: readEmailTemplate('contactEmailTemplate', {
                first_name: contact.first_name,
                last_name: contact.last_name,
                email: contact.email,
                phone_number: contact.phone_number,
                message: contact.message
            })
        };

        await sendEmail(emailOptions);

        res.status(201).json(contact);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all contacts
exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a contact by ID
exports.getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ error: 'Contact not found' });
        }
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a contact by ID
exports.updateContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!contact) {
            return res.status(404).json({ error: 'Contact not found' });
        }
        res.status(200).json(contact);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a contact by ID
exports.deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) {
            return res.status(404).json({ error: 'Contact not found' });
        }
        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
