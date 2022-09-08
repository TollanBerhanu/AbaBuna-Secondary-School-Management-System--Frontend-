const express = require('express')

const controller = require('./mark.controller')

const router = express.Router()

// -- /mark
router.route('/')
    .get(controller.getMany)
    .post(controller.createOne)
    .put(controller.updateOne)

// -- /mark/:id
router.route('/:id')
    .get(controller.getOne)
    .put(controller.updateOne)
    .delete(controller.deleteOne)

module.exports = router