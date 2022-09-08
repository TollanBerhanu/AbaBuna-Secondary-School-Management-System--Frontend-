const mongoose = require('mongoose')

const examSchema = new mongoose.Schema({
    examname: String,
    subject: String,
    classes: Array,
    exam: [{
        question: String,
        choicea: String,
        choiceb: String,
        choicec: String,
        choiced: String,
        answer: String
    }]
})

const Exam = mongoose.model('exam', examSchema)

module.exports = Exam