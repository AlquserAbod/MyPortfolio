const mongoose = require('mongoose');
const validator = require('validator');
const generateProfilePicURL = require('../utils/genrateros/generateProfilePicURL');

const usersSchema = new mongoose.Schema(
    {
        first_name: {
            required: true,
            type: String,
        },
        last_name: {
            required: true,
            type: String,
        },
        profile_pic: {
            type: String,
            validate: {
                validator: function(v) {
                    return v === null || v === '' || validator.isURL(v);
                },
                message: props => `${props.value} is not a valid image URL!`
            }
        },
        email: {
            required: true,
            type: String,
            unique: true
        },
        password: {
            required: true,
            type: String,
        },
    }, {
        timestamps: true,
        versionKey: false
    }
);

usersSchema.pre('save', function(next) {
    if (!this.profile_pic) {
        this.profile_pic = generateProfilePicURL(this.first_name, this.last_name);
    }
    next();
});

usersSchema.pre('findOneAndUpdate',  async function (next) {
    const update = this.getUpdate();

    const firstName = update.first_name;
    const lastName = update.last_name;
    const profilePic = update.profile_pic;

    if (!update.$set || profilePic || (!lastName && !firstName)) {
        return next()
    }

    const originalUser = await this.model.findOne(this.getQuery());

    update.$set.profile_pic = generateProfilePicURL(firstName || originalUser.first_name, lastName || originalUser.last_name);

    next();
});

const User = mongoose.model("User", usersSchema);

module.exports = User;
