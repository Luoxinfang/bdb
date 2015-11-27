module.exports = function (router) {
    //跨模块引用 引用common模块下面的app.js
    var app = yog.require('common/model/app.js');
    var nav = require('./model/nav.js');

    var resObj = {
        app: app.getInfo()

    };
    router.get('*', function (req, res, next) {
        var navObj = nav(req.originalUrl);
        req.public = {
            nav: navObj
        };
        resObj.nav = navObj;
        next();
    });
    //这里没有定义的路由会再次去action文件中查找
    //平台介绍
    router.get('/about', function (req, res, next) {
        res.render('home/page/about.tpl', resObj);
    });

};