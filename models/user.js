//adding the variable for using the mongoose
const mongoose = require('mongoose');

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
    username:{
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
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;