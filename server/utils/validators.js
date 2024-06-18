const validator = require('validator');

// utils/validators.js

const isValidURL = (value) => {
    const urlPattern = /^(http:\/\/|https:\/\/)/;
    return urlPattern.test(value);
};

const isPhoneNumber = (phoneNumber,isRequired = false) => {

    if(!isRequired && phoneNumber == '' || phoneNumber == null) return true;

    const minLength = 10; // Define your minimum length
    const maxLength = 15; // Define your maximum length
    if (phoneNumber.length < minLength || phoneNumber.length > maxLength) {
        return false;
    }
    return validator.isMobilePhone(phoneNumber, 'any', { strictMode: false });
};

function isGitHubUrl(url) {
    // Regular expression to match GitHub repository URLs
    const githubUrlRegex = /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+(\/)?$/;
    return githubUrlRegex.test(url);
}


const isEmail = (email) => {
    return validator.isEmail(email);
};

module.exports = {
    isValidURL,
    isPhoneNumber,
    isGitHubUrl,
    isEmail
};

