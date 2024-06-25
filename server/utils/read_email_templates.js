const fs = require('fs');
const path = require('path');

const readEmailTemplate = (templateName, data) => {
    const templatePath = path.join(__dirname, `../public/templates/${templateName}.html`);
    let template = fs.readFileSync(templatePath, 'utf-8');

    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const regex = new RegExp(`{{${key}}}`, 'g');
            template = template.replace(regex, data[key]);
        }
    }

    return template;
};

module.exports = { readEmailTemplate };
