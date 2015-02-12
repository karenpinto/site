var express=require("express");
var app = express();
var fs=require('fs');

var port = process.env.PORT || 5000
var express = require('express')
var app = express()
app.use(express.static(__dirname + "/public"))

app.get('/', function(req, res){
    fs.readFile(__dirname + '/index.html',function (err,data){
        res.writeHead(200);
        res.end(data);
    });
});

app.listen(port, function () {
    console.log('listening on new *',port);
})