const mongoose = require('mongoose');
const { isValidURL } = require('../utils/validators');

const skillsSchema = new mongoose.Schema(
    {
        name: {
            required: true,
            type: String,
        },
        icon: {
            type: String,
            validate: {
                validator: (u) => isValidURL(u),
                message: props => `${props.value} is not a valid image URL!`
            }
        },
        proficiency: {
            type: Number,
            min: 0,
            max: 100,
            required: true,
            validate: {
                validator: Number.isInteger,
                message: props => `${props.value} is not an integer value!`
            }
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true,
        }
    },
    {
        timestamps: false,
        versionKey: false
    }
);

const Skills = mongoose.model("Skills", skillsSchema);

module.exports = Skills;