const mongoose = require('mongoose');
const validator = require('validator');

const projectSchema = new mongoose.Schema(
    {
        name: {
            required: true,
            type: String,
        },
        short_description_en: {
            required: true,
            type: String,
        },
        short_description_tr: {
            required: true,
            type: String,
        },
        short_description_ar: {
            required: true,
            type: String,
        },
        description_en: {
            required: true,
            type: String,
        },
        description_tr: {
            required: true,
            type: String,
        },
        description_ar: {
            required: true,
            type: String,
        },
        visit_url: {
            type: String,
            default: null,
            url: {
                type: String,
                default: null,
                validate: {
                    validator: function(v) {
                        return v === null || v === '' || validator.isURL(v);
                    },
                    message: props => `${props.value} is not a valid URL!`
                }
            },
        },
        github_url: {
            type: String,
            default: null,
            validate: {
                validator: function(v) {
                    return v === null || v === '' || (validator.isURL(v) && isGitHubUrl(v));
                },
                message: props => `${props.value} is not a valid GitHub repository URL!`
            }
        },

        main_image: {
            type: String,
            default: null,
            validate: {
                validator: function(v) {
                    return v === null || v === '' || validator.isURL(v);
                },
                message: props => `${props.value} is not a valid image URL!`
            }
        },
        project_images: [
            {
                type: String,
                validate: {
                    validator: function(v) {
                        return v === null || v === '' || validator.isURL(v);
                    },
                    message: props => `${props.value} is not a valid image URL!`
                }
            }
        ],
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;