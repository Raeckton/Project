const mongodb = require('../db/connect')
const controller = require('../controllers/deck')

const routes = require('express').Router()
routes.post('/add', controller.adddeck) 
module.exports = routes