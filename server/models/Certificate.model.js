const mongoose = require('mongoose');
const { isValidURL } = require('../utils/validators');

const certificateSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            required: true,
            validate: {
                validator: function(v) {
                    return v === null || v === '' || isValidURL(v);
                },
                message: props => `${props.value} is not a valid image URL!`
            }
        },
    },{
        timestamps: false,
        versionKey: false
    }
);

const Certificate = mongoose.model("certificate",certificateSchema);

module.exports = Certificate;
