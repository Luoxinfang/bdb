module.exports = function (router) {

  var appInfo = yog.require('_common/model/app.js');
  var resObj = {
    app: appInfo.getInfo()
    ,headerBack: true //默认头部带返回按钮
    ,headerTitle: '百多宝' //默认头部标题
  };

  router.get('*', function (req, res, next) {
    next();
  });

  //首页
  router.get('/', function (req, res, next) {
    resObj.headerMenu = true;
    resObj.headerRGup1 = true;
    resObj.headerSort = '时间排序';
    res.render('cus/page/index.tpl', resObj);
  });
  //登录
  router.get('/login', function (req, res, next) {
    resObj.app.title = '用户登录';
    res.render('cus/page/user/login.tpl', resObj);
  });
  //注册
  router.get('/reg-tel', function (req, res, next) {
    resObj.app.title = '用户注册';
    res.render('cus/page/user/reg-tel.tpl', resObj);
  });
  //关于我们
  router.get('/about', function (req, res, next) {
    res.render('cus/page/about.tpl', resObj);
  });
  //WEUI
  router.get('/weui', function (req, res, next) {
    res.render('cus/page/weui.tpl', resObj);
  });

};