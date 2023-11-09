//adding the variable for using the mongoose
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    courseName: {
        type: String,
        default: "NULL"
    },
    mentorName: {
        type: String,
        default: "NULL"
    },
    mentorID: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dob: {
        type: String,
        default: "NULL"
    },
    grades: {
        type: Number,
        default: 0
    },
    address: {
        type: String,
        default: "NULL"
    },
    city: {
        type: String,
        default: "NULL"
    },
    pincode: {
        type: String,
        default: 0
    },
    interviews: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Interview'
        }
    ]
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;