var express = require('express');
var router = express.Router();

const userController = require("../controllers/user");
const user = new userController();

/* signup */
router.post("/signup", user.signup)

/* login */
router.post("/login", user.login)

module.exports = router;
