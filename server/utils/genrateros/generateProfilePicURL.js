// utils.js
function generateProfilePicURL(firstName, lastName) {
    const formattedName = `${firstName}+${lastName}`;
    return `https://avatar.iran.liara.run/username?username=${formattedName}`;
}

module.exports = generateProfilePicURL;
