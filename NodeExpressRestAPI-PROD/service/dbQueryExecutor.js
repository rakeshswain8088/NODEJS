var DBConnect = require('./dbConnection');

clientQueryAsync = (sqlQuery) => new Promise((resolve,reject)=>{
    console.log("Query",sqlQuery);

    DBConnect.query(sqlQuery,(err,result)=>{
        if(err){reject(err)}
        else{resolve(result)}
    })
})
module.exports = clientQueryAsync;