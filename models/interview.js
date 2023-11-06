//adding the variable for using the mongoose
const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    requirement: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    openings: {
        type: Number,
        default: 0
    },
    location: {
        type: String,
        default: "NULL"
    }
});

const Interview = mongoose.model('Interview', interviewSchema);

module.exports = Interview;