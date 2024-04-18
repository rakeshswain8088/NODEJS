const { sendStatus } = require("express/lib/response");

function authenticateToken(req,res,next){
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return res,sendStatus(401)
    }

    function verifyAccessToken(token){
        const secret = 'secret-key'
        try{
            const decoded = jwt.verify(token,secret);
            return {success:true,data:decoded}
        }catch(error){
            return {success:false,error:error.message}
        }
    }

    const result = verifyAccessToken(token);

    if(!result.success){
        return res.status(403).json({error:result.error})
    }

    req.user = result.data;
    next();

}

module.exports = authenticateToken;