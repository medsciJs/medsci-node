'use strict';
var express = require('express');
var http = require('http');
var request = require("request");
var bodyParser = require('body-parser');
var api = require('./env.js')
var PORT = 80;

var app = express();
app.all('/base/*', function (req, res) {
   var proxy_host = process.env.HTTP_PROXY_HOST || '127.0.0.1';
    
    //var proxy_port = process.env.HTTP_PROXY_PORT || '13092'; // 30101
    //1. 修改端口号为Mesh监听端口。
    var proxy_port = process.env.HTTP_PROXY_PORT || '30101';
    var service_addr = process.env.SERVICE_ADDR || proxy_host + ":" + proxy_port
    console.log(proxy_host + ':' + proxy_port);
    console.log(req.query.city + ", " + req.query.type);
    console.log(req.headers);
    var opt = {
        host: proxy_host,
        port: proxy_port,
        method: 'GET',    //这里是发送的方法
        //2.将原来的IP:Port替换为fusionweather。
        //path: 'http://' + service_addr + '/fusionweather/show?city=' + req.query.city,    //这里是访问的路径
        path: 'http://HelloServiceComb/hello',
        headers: req.headers
    };
    if (req.query.user) {
        opt.path = opt.path + "&user=" + req.query.user;
    }
    console.log(opt.path);
    var body = '';
    var request = http.request(opt, function (response) {
        console.log("Got response: " + response.statusCode);
        response.on('data', function (d) {
            body += d;
        }).on('end', function () {
            console.log(body);
            res.writeHead(200, {'Content-Type': 'application/json; charset=utf8'});
            res.write(body);
            res.end();
        });
    }).on('error', function (e) {
        console.log("Got error: " + e.message);
    });
    console.log(request);
    request.end();
});
//静态文件托管
app.use(express.static('dist'));
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);