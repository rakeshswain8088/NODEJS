var express = require('express');
var app = express();

app.get('/api/getDetails',(req,res,next)=>{
    res.send({message:"Get APi working with Express"})
})

app.post('/api/getDetails',(req,res,next)=>{
    res.send({message:"Post APi working with Express"})
})

app.listen(8080,console.log('app running'))