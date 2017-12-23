var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    return res.render('index', { title: '欢迎使用爬虫工具 ',PzUrl:'配置网址',PzName:'配置名称'});
});

router.get('/type', function(req, res, next) {
    var name = req.query.name;
    var Url = req.query.url;

   res.json({"status": "success", title: '欢迎使用爬虫工具 ',PzName:'配置名称',Name:name,Url:Url});
});
module.exports = router;
