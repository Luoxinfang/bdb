module.exports = function (router) {

  var appInfo = yog.require('_common/model/app.js');
  var resObj = {
    app: appInfo.getInfo()

  };

  router.get('*', function (req, res, next) {

    next();
  });

  //首页
  router.get('/', function (req, res, next) {
    res.render('cus/page/index.tpl', resObj);
  });
  //注册
  router.get('/reg', function (req, res, next) {
    res.render('cus/page/reg.tpl', resObj);
  });
  //关于我们
  router.get('/about', function (req, res, next) {
    res.render('cus/page/about.tpl', resObj);
  });

};