const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router()

router.get('/', Controller.home)
router.get('/sign-in', Controller.form)
router.get('/movies', Controller.movie)
router.get('/movies/:id', Controller.detail)

module.exports = router