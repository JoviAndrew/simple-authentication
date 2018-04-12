const router = require('express').Router();
const user = require('../controller/user_controller')

router.post('/regis', user.regisNewUser);

router.post('/login', user.loginUser);

module.exports = router;