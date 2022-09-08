const express = require('express')
const { json, urlencoded } = require('body-parser')
const cors = require('cors')
const connection = require('./resources/db/connect')
// require('dotenv').config()

// const adminRouter = require('./resources/admin/admin.router')
const teacherRouter = require('./resources/teacher/teacher.router')
const studentRouter = require('./resources/student/student.router')
const subjectRouter = require('./resources/subject/subject.router')
const classRouter = require('./resources/class/class.router')
const markRouter = require('./resources/mark/mark.router')
const examRouter = require('./resources/exam/exam.router')

const { newToken, verifyToken, createToken, authenticateToken } = require('./resources/auth/auth')

//Connect to MongoDB database
connection() 

const app = express()
const router = express.Router()

/* app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });   */
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))

app.post('/login', createToken, (req, res) => {
  const user = { username: req.body.username, password: req.body.password }
  //console.log(newToken(user))
  if(req.user) res.send({ token: req.user, type: req.type, name: req.name, info: req.info })
  else res.status(401).send('Invalid Credentials!')
})
// app.get('/login', (req, res) => {
//   const token = req.query.token
//   verifyToken(token).then((data) => {
//     console.log('Token as Query Parameter: ' + data)
//     res.send(data)
//   })
// })
app.get('/login', authenticateToken, (req, res) => {
  console.log('Token as Request Header: ' + req.user)
  res.send(req.user)
})

app.use(authenticateToken)

app.use('/api', router)
// app.use('/admin', adminRouter)
app.use('/teacher', teacherRouter)
app.use('/student', studentRouter)
app.use('/subject', subjectRouter)
app.use('/class', classRouter)
app.use('/mark', markRouter)
app.use('/exam', examRouter)


app.listen(3000, () => {
    console.log('Server Running on Port 3000 ...')
})