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
        res.render('bus/page/index.tpl', resObj);
    });
};