const controller = require('../controller/crud.controller')
const SubjectModel = require('./subject.model')

module.exports = controller(SubjectModel)
