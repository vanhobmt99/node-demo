var express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.listen(port,()=>console.log("Listen on port" ,port))
