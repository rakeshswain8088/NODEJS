var http = require('http');

http.createServer((request,response)=>{
    if(request.url == "/api/getDetails" && request.method == "GET"){
        response.write('API Working Fine');
        response.end();
    }
}).listen(8080,()=>{
    console.log("Node Server Running on port : 8080")
})

