var router = require('express').Router();
var JWTauth = require('../middleware/tokenValidator')
router.post('/addUser',JWTauth, require('../controllers/usersAdd.controller'));
module.exports = router;