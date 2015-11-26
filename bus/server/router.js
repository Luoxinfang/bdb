module.exports = function (router) {

    var appInfo = yog.require('_common/model/app.js');
    var resObj = {
        app: appInfo.getInfo()

    };
    console.log(appInfo);
    router.get('*', function (req, res, next) {

        next();
    });

    //首页
    router.get('/', function (req, res, next) {
        resObj.app.title = '用户登录';
        res.render('bus/page/user/login.tpl', resObj);
    });
    //登录
    router.get('/login', function (req, res, next) {
        resObj.app.title = '用户登录';
        res.render('bus/page/user/login.tpl', resObj);
    });
};