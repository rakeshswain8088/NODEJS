var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async(req, res, next)=> {
  function fun(){
    console.log('hello')
  }

  await fun();
  res.send('respond with a resource');
});

module.exports = router;
