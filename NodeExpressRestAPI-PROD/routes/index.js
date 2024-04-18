var router = require('express').Router();

router.use('/login',require('./login.route'));
router.use('/user',require('./users.route'))
router.use('/user',require('./usersAdd.route'))

module.exports = router;
