var clientQueryAsync = require('../service/dbQueryExecutor')
var user = async(req,res,next)=>{
    let result = await clientQueryAsync(`select * from emp`);
    res.send({"data":result})
}
module.exports = user;