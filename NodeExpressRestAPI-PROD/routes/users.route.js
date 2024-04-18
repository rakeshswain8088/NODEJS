var router = require('express').Router();
var JWTauth = require('../middleware/tokenValidator')
router.post('/userDetails',JWTauth, require('../controllers/users.controller'));
module.exports = router;
