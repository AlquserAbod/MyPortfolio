const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
    title_en: {
        required: true,
        type: String,
        unique: true
    },
    title_tr: {
        required: true,
        type: String,
        unique: true
    },
    title_ar: {
        required: true,
        type: String,
        unique: true
    },
    },{
        timestamps: false,
        versionKey: false
    }
);

const Category = mongoose.model("Category",categorySchema);

module.exports = Category;
