const mongoose = require('mongoose')

const subjectSchema = new mongoose.Schema({
    subjectname: {
        type: String,
        required: true,
        trim: true
    },
    subjectnine: Boolean,
    subjectten: Boolean,
    subjectdescription: String
})

const Subject = mongoose.model('subject', subjectSchema)

module.exports = Subject