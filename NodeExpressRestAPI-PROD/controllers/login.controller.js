var generateAccessToken = require('../middleware/tokenCreate');
var jwttoken = async(req,res,next)=>{
    user = req.body;
    token = generateAccessToken(user)
    console.log(token)
    res.send({'token':token})
}
module.exports = jwttoken;