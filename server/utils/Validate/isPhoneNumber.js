const validator = require('validator');

const isPhoneNumber = (phoneNumber,isRequired = false) => {

    if(!isRequired && phoneNumber == '' || phoneNumber == null) return true;

    const minLength = 10; // Define your minimum length
    const maxLength = 15; // Define your maximum length
    if (phoneNumber.length < minLength || phoneNumber.length > maxLength) {
        return false;
    }
    return validator.isMobilePhone(phoneNumber, 'any', { strictMode: false });
};

module.exports = isPhoneNumber;