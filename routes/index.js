var express = require('express');
var url = require("url");
var path = require("path");
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'express'});
});
router.all('/ajax/*', function (req, res) {
    var urlObject = url.parse(req.url);
    var context = require('..' + urlObject.pathname);
    context.run(req, res);
});
router.get('/ejs/*', function (req, res) {
    var pathObject = path.parse(req.url);
    var urlObject = url.parse(req.url);
    var data = require('..' + urlObject.pathname);
    res.render(pathObject.name, data);
});

router.get('/extjs/*', function (req, res) {
    var urlName = req.url;
    var regx = /(.+)(\.ext)(\?.+)?$/;
    var rs = regx.exec(urlName);
    if (!rs) {
        throw new Error('文件扩展名不正确！');
    }
    else {
        var query = rs[3] ? rs[3] : '';
        var jsurl = '../javascripts' + rs[1] + '.js' + query;
        var jspath = '../public/javascripts' + rs[1] + '.js';
        path.exists(jspath, function (exists) {
            if (!exists) {
                res.status(500);
                res.render('error', {
                    message: '指定的文件不存在：' + jspath,
                    error: {status: '', stack: ''}
                });
            }
            else {
                res.render('extJS5', {js: jsurl});
            }
        });
    }
});
module.exports = router;
