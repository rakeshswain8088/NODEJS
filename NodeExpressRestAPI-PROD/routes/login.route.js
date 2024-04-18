var router = require('express').Router();
router.post('/loginUser',require('../controllers/login.controller'));
module.exports =router;