module.exports = function (router) {

  var appInfo = yog.require('_common/model/app.js');
  var resObj = {
    app: appInfo.getInfo()
    ,header: {
      title: '百多宝'    //header标题
      ,back: true       //返回按钮（默认：有）
      ,backUrl: '/cus'  //返回链接（默认：用户首页）
      ,me: false        //首页我
      ,rGup1: false     //右侧搜索和消息图标
      ,rGup2: false     //右侧收藏和分享图标
      ,sort: false      //右侧排序或文字
      ,msg: false       //右侧消息图标
      ,nav: ['系统消息','用户消息']     //头部nav数组
      ,tab: ['全部','进行中','未开始']  //头部tab数组
    }
  };

  router.get('*', function (req, res, next) {
    next();
  });

  //首页
  router.get('/', function (req, res, next) {
    resObj.app.title = resObj.header.title = '百多宝';
    resObj.header.me = true;
    resObj.header.rGup1 = true;
    resObj.header.sort = '时间排序';
    res.render('cus/page/index.tpl', resObj);
  });
  //登录
  router.get('/login', function (req, res, next) {
    resObj.app.title = '用户登录';
    res.render('cus/page/user/login.tpl', resObj);
  });
  //注册 —— 输入电话号码
  router.get('/reg-tel', function (req, res, next) {
    resObj.app.title = resObj.header.title = '注册';
    res.render('cus/page/user/reg-tel.tpl', resObj);
  });
  //注册 —— 设置密码
  router.get('/reg-pwd', function (req, res, next) {
    resObj.app.title = resObj.header.title = '注册';
    res.render('cus/page/user/reg-pwd.tpl', resObj);
  });
  //找回密码 —— 输入信息
  router.get('/find-pwd-info', function (req, res, next) {
    resObj.app.title = resObj.header.title = '找回密码';
    res.render('cus/page/user/find-pwd-info.tpl', resObj);
  });
  //找回密码 —— 设置新密码
  router.get('/find-pwd-new', function (req, res, next) {
    resObj.app.title = resObj.header.title = '找回密码';
    res.render('cus/page/user/find-pwd-new.tpl', resObj);
  });
  //绑定第三方账号 —— 输入信息
  router.get('/bind-account-info', function (req, res, next) {
    resObj.app.title = resObj.header.title = '绑定第三方账号';
    res.render('cus/page/user/bind-account-info.tpl', resObj);
  });
  //绑定第三方账号 —— 设置新密码
  router.get('/bind-account-pwd', function (req, res, next) {
    resObj.app.title = resObj.header.title = '绑定第三方账号';
    res.render('cus/page/user/bind-account-pwd.tpl', resObj);
  });
  //修改密码
  router.get('/change-pwd', function (req, res, next) {
    resObj.app.title = resObj.header.title = '修改密码';
    res.render('cus/page/user/change-pwd.tpl', resObj);
  });
  //更换手机号 —— 验证
  router.get('/change-tel-info', function (req, res, next) {
    resObj.app.title = resObj.header.title = '更换手机号';
    res.render('cus/page/user/change-tel-info.tpl', resObj);
  });
  //更换手机号 —— 输入新号码
  router.get('/change-tel-new', function (req, res, next) {
    resObj.app.title = resObj.header.title = '更换手机号';
    res.render('cus/page/user/change-tel-new.tpl', resObj);
  });
  //收货地址
  router.get('/receipt-address', function (req, res, next) {
    resObj.app.title = resObj.header.title = '收货地址';
    res.render('cus/page/user/receipt-address.tpl', resObj);
  });
  //我的钱包 —— 首页
  router.get('/wallet', function (req, res, next) {
    resObj.app.title = resObj.header.title = '我的钱包';
    res.render('cus/page/wallet/index.tpl', resObj);
  });
  //拍卖列表
  router.get('/auction/list', function (req, res, next) {
    resObj.app.title = resObj.header.title = '拍卖列表';
    resObj.header.sort = "时间排序";
    resObj.header.tab = ['全部','进行中','未开始'];
    res.render('cus/page/auction/list.tpl', resObj);
  });
  //关于我们
  router.get('/about', function (req, res, next) {
    res.render('cus/page/about.tpl', resObj);
  });
  //WEUI
  router.get('/weui', function (req, res, next) {
    res.render('cus/page/weui.tpl', resObj);
  });
  //系统消息
  router.get('/sys-message', function (req, res, next) {
    res.render('cus/page/user/sys-message.tpl', resObj);
  });
  //用户消息
  router.get('/user-message', function (req, res, next) {
    res.render('cus/page/user/user-message.tpl', resObj);
  });
  //卡片管理
  router.get('/card-management', function (req, res, next) {
    resObj.app.title = resObj.headerTitle = '银行卡管理';
    res.render('cus/page/user/card-management.tpl', resObj);
  });
};