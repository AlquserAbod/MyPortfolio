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


// utils/dateUtils.js

/**
 * Validate date format against YYYY-MM-DD format.
 * @param {string} dateString - Date string to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
const isValidDateFormat = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD format regex
    return regex.test(dateString);
};
  

module.exports = {
    isValidDateFormat,
    isValidURL,
    isPhoneNumber,
    isGitHubUrl,
    isEmail
};

