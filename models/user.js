//adding the variable for using the mongoose
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const AVATAR_path = '/uploads/avatars';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        default: "NULL"
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        default: "NULL"
    },
    empID: {
        type: String,
        default: "NULL"
    },
    avatar: {
        type: String,
        default: '/images/user_profile.png'
    }
},
    {
        timestamps: true
    });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', AVATAR_path));
    },
    filename: function (req, file, cb) {
        //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + Date.now());
    }
});

//static
userSchema.statics.uploadedAvatar = multer({ storage: storage }).single('avatar');
userSchema.statics.avatarPath = AVATAR_path;

const User = mongoose.model('User', userSchema);

module.exports = User;