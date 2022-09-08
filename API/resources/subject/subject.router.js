const express = require('express')

const controller = require('./subject.controller')

const router = express.Router()

// -- /subject
router.route('/')
    .get(controller.getMany)
    .post(controller.createOne)

// -- /subject/:id
router.route('/:id')
    .get(controller.getOne)
    .put(controller.updateOne)
    .delete(controller.deleteOne)

module.exports = router