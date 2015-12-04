module.exports = function (router) {
  var _ = require('lodash');
  var appInfo = yog.require('_common/model/app.js');
  var resObj = {
    app: appInfo.getInfo(),
    header: {
      title: '百多宝',   //header标题
      back: true,       //返回按钮（默认：有）
      backUrl: '/cus',  //返回链接（默认：用户首页）
      me: false,        //首页我
      rGup1: false,     //右侧搜索和消息图标
      rGup2: false,     //右侧收藏和分享图标
      sort: false,      //右侧排序或文字
      msg: false,       //右侧消息图标
      nav: ['系统消息','用户消息'],     //头部nav数组
      tab: ['全部','进行中','未开始'],  //头部tab数组
      set:false
    }
  };

  router.get('*', function (req, res, next) {
    next();
  });

  //首页
  router.get('/', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.me = true;
    obj.header.rGup1 = true;
    res.render('cus/page/index.tpl', obj);
  });
  //登录
  router.get('/login', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    res.render('cus/page/user/login.tpl', obj);
  });
  //注册 —— 输入电话号码
  router.get('/reg-tel', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '注册';
    obj.header.backUrl = '/cus/login';
    res.render('cus/page/user/reg-tel.tpl', obj);
  });
  //注册 —— 设置密码
  router.get('/reg-pwd', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '注册';
    obj.header.backUrl = '/cus/reg-tel';
    res.render('cus/page/user/reg-pwd.tpl', obj);
  });
  //找回密码 —— 输入信息
  router.get('/find-pwd-info', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '找回密码';
    obj.header.backUrl = '/cus/login';
    res.render('cus/page/user/find-pwd-info.tpl', obj);
  });
  //找回密码 —— 设置新密码
  router.get('/find-pwd-new', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '找回密码';
    obj.header.backUrl = '/cus/find-pwd-info';
    res.render('cus/page/user/find-pwd-new.tpl', obj);
  });
  //找回密码 —— 找回密码结果页
  router.get('/find-pwd-result', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '找回密码';
    obj.header.back = false;
    res.render('cus/page/user/find-pwd-result.tpl', obj);
  });
  //绑定第三方账号 —— 输入信息
  router.get('/bind-account-info', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '绑定第三方账号';
    obj.header.back = false;
    res.render('cus/page/user/bind-account-info.tpl', obj);
  });
  //绑定第三方账号 —— 设置新密码
  router.get('/bind-account-pwd', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '绑定第三方账号';
    obj.header.backUrl = '/cus/bind-account-info';
    res.render('cus/page/user/bind-account-pwd.tpl', obj);
  });
  //修改密码
  router.get('/change-pwd', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '修改密码';
    res.render('cus/page/user/change-pwd.tpl', obj);
  });
  //更换手机号 —— 验证
  router.get('/change-tel-info', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '更换手机号';
    res.render('cus/page/user/change-tel-info.tpl', obj);
  });
  //更换手机号 —— 输入新号码
  router.get('/change-tel-new', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '更换手机号';
    obj.header.backUrl = '/cus/change-tel-info';
    res.render('cus/page/user/change-tel-new.tpl', obj);
  });
  //收货地址
  router.get('/receipt-address', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '收货地址';
    res.render('cus/page/user/receipt-address.tpl', obj);
  });
  //我的钱包 —— 首页
  router.get('/wallet', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '我的钱包';
    res.render('cus/page/wallet/index.tpl', obj);
  });
  //我的钱包 —— 提现
  router.get('/withdrawals', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '提现';
    obj.header.backUrl = '/cus/wallet';
    res.render('cus/page/wallet/withdrawals.tpl', obj);
  });
  //我的钱包 —— 充值
  router.get('/recharges', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '充值';
    obj.header.backUrl = '/cus/wallet';
    res.render('cus/page/wallet/recharges.tpl', obj);
  });
  //我的钱包 —— 提现结果页
  router.get('/withdrawals-result', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '提现';
    obj.header.backUrl = '/cus/wallet';
    res.render('cus/page/wallet/withdrawals-result.tpl', obj);
  });
  //我的钱包 ——添加银行卡
  router.get('/add-bank-card', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '添加银行卡';
    obj.header.backUrl = '/cus/wallet';
    res.render('cus/page/wallet/add-bank-card.tpl', obj);
  });
  //拍卖列表
  router.get('/auction/list', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '拍卖列表';
    obj.header.sort = "时间排序";
    res.render('cus/page/auction/list.tpl', obj);
  });
  //拍品
  router.get('/auction/detail', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '千年古玉';
    obj.header.back = true;
    obj.header.backUrl = '/cus/auction/list';
    obj.header.rGup2 = true;
    obj.userPhotoSize = 100;
    obj.auctionStatus = req.query.status == null ? 0 : req.query.status;
    res.render('cus/page/auction/detail.tpl', obj);
  });
  //店铺首页
  router.get('/store', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '小唐的店铺';
    obj.header.back = true;
    obj.header.rGup2 = true;
    res.render('cus/page/store.tpl', obj);
  });
  //搜索页面
  router.get('/auction/search', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    res.render('cus/page/auction/search.tpl', obj);
  });
  //拍品分类
  router.get('/auction/category', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '分类';
    res.render('cus/page/auction/category.tpl', obj);
  });
  //关于我们
  router.get('/about', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    res.render('cus/page/about.tpl', obj);
  });
  //WEUI
  router.get('/weui', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    res.render('cus/page/weui.tpl', obj);
  });
  //系统消息
  router.get('/sys-message', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    res.render('cus/page/user/sys-message.tpl', obj);
  });
  //用户消息
  router.get('/user-message', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    res.render('cus/page/user/user-message.tpl', obj);
  });
  //卡片管理
  router.get('/card-management', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '银行卡管理';
    obj.header.sort = '删除';
    res.render('cus/page/user/card-management.tpl', obj);
  });
  //系统设置
  router.get('/sys-settings', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '系统设置';
    obj.header.set=['安全','推送设置','更新版本','关于百多宝','投诉建议']
    res.render('cus/page/user/sys-settings.tpl', obj);
  });
  //安全设置
  router.get('/safety-settings', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '系统设置';
    obj.header.set=['修改密码','更换手机号']
    res.render('cus/page/user/sys-settings.tpl', obj);
  });
  //推送设置
  router.get('/push-settings', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '推送设置';
    res.render('cus/page/settings/push-settings.tpl', obj);
  });
  //版本更新
  router.get('/version-update', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '版本更新';
    res.render('cus/page/settings/version-update.tpl', obj);
  });
  //关于百多宝
  router.get('/about-bdb', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '关于百多宝';
    res.render('cus/page/settings/about-bdb.tpl', obj);
  });
  //投诉建议
  router.get('/suggestions', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '投诉建议';
    res.render('cus/page/settings/suggestions.tpl', obj);
  });
  //退款
  router.get('/to-return', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '退款';
    res.render('cus/page/user/to-return.tpl', obj);
  });
  //申请平台介入
  router.get('/application-bdb', function (req, res, next) {
    var obj = _.cloneDeep(resObj);
    obj.header.title = '申请平台介入';
    res.render('cus/page/user/application-bdb.tpl', obj);
  });
};