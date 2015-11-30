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
    resObj.headerMe = true;
    resObj.headerRGup1 = true;
    resObj.headerSort = '时间排序';
    res.render('cus/page/index.tpl', resObj);
  });
  //登录
  router.get('/login', function (req, res, next) {
    resObj.app.title = '用户登录';
    res.render('cus/page/user/login.tpl', resObj);
  });
  //注册 —— 输入电话号码
  router.get('/reg-tel', function (req, res, next) {
    resObj.app.title = resObj.headerTitle = '注册';
    res.render('cus/page/user/reg-tel.tpl', resObj);
  });
  //注册 —— 设置密码
  router.get('/reg-pwd', function (req, res, next) {
    resObj.app.title = resObj.headerTitle = '注册';
    res.render('cus/page/user/reg-pwd.tpl', resObj);
  });
  //找回密码 —— 输入信息
  router.get('/find-pwd-info', function (req, res, next) {
    resObj.app.title = resObj.headerTitle = '找回密码';
    res.render('cus/page/user/find-pwd-info.tpl', resObj);
  });
  //找回密码 —— 设置新密码
  router.get('/find-pwd-new', function (req, res, next) {
    resObj.app.title = resObj.headerTitle = '找回密码';
    res.render('cus/page/user/find-pwd-new.tpl', resObj);
  });
  //绑定第三方账号 —— 输入信息
  router.get('/bind-account-info', function (req, res, next) {
    resObj.app.title = resObj.headerTitle = '绑定第三方账号';
    res.render('cus/page/user/bind-account-info.tpl', resObj);
  });
  //绑定第三方账号 —— 设置新密码
  router.get('/bind-account-pwd', function (req, res, next) {
    resObj.app.title = resObj.headerTitle = '绑定第三方账号';
    res.render('cus/page/user/bind-account-pwd.tpl', resObj);
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