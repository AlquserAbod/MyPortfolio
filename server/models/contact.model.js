const mongoose = require('mongoose');
const isEmail = require('../utils/Validate/isEmail');
const isPhoneNumber = require('../utils/Validate/isPhoneNumber');

const contactSchema = new mongoose.Schema(
    {
    first_name: {
        required: true,
        type: String,
    },
    last_name: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
        validate: {
            validator: (v) => isEmail(v),
            message: props => `${props.value} is not a valid email!`
        }
    },
    phone_number: {
        type: String,
        validate: {
            validator: (v) => isPhoneNumber(v),
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    readed: {
        type: Boolean,
        default: false
    },
    message: {
        required: true,
        type: String,
    }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Contact = mongoose.model("Contact",contactSchema);

module.exports = Contact;
