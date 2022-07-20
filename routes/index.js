var express = require('express');
var router = express.Router();

const mainRoute = require('./home')
const userRoute = require('./user')

router.use('/', mainRoute)
router.use('/user', userRoute)

module.exports = router;