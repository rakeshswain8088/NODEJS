const jwt = require('jsonwebtoken')

function generateAccessToken(user){
    const payload = {
        id:user.id,
        email:user.email
    }

    const secret = 'secret-key';
    const options = {expiresIn: '1h'}

    return jwt.sign(payload,secret,options)
}

module.exports = generateAccessToken;