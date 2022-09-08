const controller = require('../controller/crud.controller')
const MarkModel = require('./mark.model')
const StudentModel = require('../student/student.model')

module.exports = controller(MarkModel)
module.exports = {
    ...controller(MarkModel),

    // mark/?student=613453a343234e
    async updateOne(req, res){
        try{
            // const student = await StudentModel.findOne({ _id: req.query.student })
            console.log('Marks' +JSON.stringify(req.query.grade + ' ' + req.query.semester + ' ' + req.user.subject + ' ' + req.user.type))
            const data = {
                studentid: req.body.studentid,
                grade: req.query.grade,
                semester: req.query.semester,
                ...req.body.marks
            }
            /* JSON.parse(`{ 
                "studentid": "${req.body.studentid}",
                "${grade}": {
                    "semester1": {
                        "${req.user.subject}": ${marks}
                    }
                }
            }`) */
            console.log("Data: " + JSON.stringify(data))

            var doc
            if(await MarkModel.findOne({studentid: req.query.student, grade: req.query.grade, semester: req.query.semester, subject: req.user.subject})) {
                doc = await MarkModel.findOneAndUpdate({studentid: req.query.student, grade: req.query.grade, semester: req.query.semester, subject: req.user.subject}, req.body.marks, { new: true }).exec()
                console.log('Mark Updated!')
            }
            else {
                if(req.user.type == 'admin'){
                    console.log('I am Admin: ' + req.query.grade +' -- '+ req.query.semester)
                    const subjects = ['English', 'Afan-Oromo', 'Amharic', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Geography', 'History', 'Civics', 'ICT', 'HPE']
                    subjects.forEach(async (subject) => {
                        doc = await MarkModel.create({...data, subject: subject})
                    })
                }
                else doc = await MarkModel.create(data)
            }
            if(!doc) res.status(404).end()
            console.log("Doc: " + doc)
            console.log("Student: " + req.query.student)
            console.log("Subject: " + req.user.subject)
            if(req.user.type != 'admin') res.status(200).json({ data: doc })
            res.end()
        } catch(err) {
            console.log("Error while updating marks: " + err)
        }
    },
    async getMany(req, res){
        try{
            const docs = await MarkModel.find({ studentid: req.user._id }).exec()
            if(!docs) res.status(404).end()
            res.status(200).json({ data: docs })
        }catch(err) {console.log('Error while retrieving marks: ' + err)}
    }
}