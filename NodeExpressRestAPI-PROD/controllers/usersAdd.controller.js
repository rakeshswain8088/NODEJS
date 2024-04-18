var clientQueryAsync = require('../service/dbQueryExecutor')
var usersAdd = async(req,res,next)=>{
    let empname = req.body.empname;
    let empid = req.body.empid;
    let empstatus = req.body.empstatus;
    let result = await clientQueryAsync(`insert into emp values('${empname}',${empid},${empstatus})`);
    res.send({"message":"connected","status":200,"data":result})
}
module.exports = usersAdd;