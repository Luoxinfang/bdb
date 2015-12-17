module.exports = function (router) {
  var _ = require('lodash');
  var app = yog.require('_common/model/app.js');

  router.get('*', function (req, res, next) {
    //需要验证登录的接口
    var userPath = /^\/(user|order|wallet)\/*\w*/;
    //console.log(userPath.test(req.path) && !req.session.user);
    if (userPath.test(req.path) && !req.session.user) {
      req.session.login_referrer = req.originalUrl;
      res.redirect('/login');
    } else {
      req.appData = {
        header: app.getHeader()
      };
      next();
    }
  });
  //首页
  router.get('/', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      leftIcon: 'me',
      leftUrl: false,
      rightIcons: [{icon: 'search', url: '/auction/search'},
        {icon: 'msg', url: false}]
    })
    res.render('cus/page/index.tpl', resObj);
  });


  //注册登录相关------------------------------
  //登录
  router.get('/login', function (req, res, next) {
    res.render('cus/page/session/login.tpl', req.appData);
  });
  //注册 —— 输入电话号码
  router.get('/reg-tel', function (req, res, next) {
    req.appData.header.title = '注册';
    res.render('cus/page/user/reg-tel.tpl', req.appData);
  });
  //注册 —— 设置密码
  router.get('/reg-pwd', function (req, res, next) {
    req.appData.header.title = '注册';
    res.render('cus/page/user/reg-pwd.tpl', req.appData);
  });
  //找回密码 —— 输入信息
  router.get('/find-pwd-info', function (req, res, next) {
    req.appData.header.title = '找回密码';
    res.render('cus/page/user/find-pwd-info.tpl', req.appData);
  });
  //找回密码 —— 设置新密码
  router.get('/user/find-pwd-new', function (req, res, next) {
    req.appData.header.title = '找回密码';
    res.render('cus/page/user/find-pwd-new.tpl', req.appData);
  });
  //找回密码 —— 找回密码结果页
  router.get('/user/find-pwd-result', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '找回密码';
    resObj.header.leftIcon = false;
    res.render('cus/page/user/find-pwd-result.tpl', resObj);
  });
  //绑定第三方账号 —— 输入信息
  router.get('/user/bind-account-info', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '绑定第三方账号';
    resObj.header.leftIcon = false;
    res.render('cus/page/user/bind-account-info.tpl', resObj);
  });
  //绑定第三方账号 —— 设置新密码
  router.get('/user/bind-account-pwd', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '绑定第三方账号';
    resObj.header.leftUrl = '/bind-account-info';
    res.render('cus/page/user/bind-account-pwd.tpl', resObj);
  });
  //修改密码
  router.get('/user/change-pwd', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '修改密码';
    res.render('cus/page/user/change-pwd.tpl', resObj);
  });
  //更换手机号 —— 验证
  router.get('/user/change-tel-info', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '更换手机号';
    res.render('cus/page/user/change-tel-info.tpl', resObj);
  });
  //更换手机号 —— 输入新号码
  router.get('/user/change-tel-new', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '更换手机号';
    resObj.header.leftUrl = '/change-tel-info';
    res.render('cus/page/user/change-tel-new.tpl', resObj);
  });
  //收货地址
  router.get('/user/receipt-address', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title :'收货地址',
      leftUrl: '/user/personal',
      rightText:'',
    })
    /*console.log(req.query.type);*/
    if(req.query.type == 'delete'){
      resObj.header.rightText = '删除';
    }else {
      resObj.header.rightText = false;
    }
    res.render('cus/page/user/receipt-address.tpl', resObj);
  });
  //个人主页基本信息修改
  router.get('/user/update-info',function(req,res,next){
    var resObj = req.appData;
    _.extend(resObj.header, {
      title :'修改昵称',
      rightText: '确定',
      leftUrl: '/user/personal',
    })
    res.render('cus/page/user/update-info.tpl', resObj);
  });
  //实名认证
  router.get('/user/check-name',function(req,res,next){
    var resObj = req.appData;
    _.extend(resObj.header, {
      title :'实名认证',
      rightText: '确定',
      leftUrl: '/user/personal',
    })
    res.render('cus/page/user/check-name.tpl', resObj);
  });
  //我的钱包 —— 交易明细
  router.get('/wallet/trans-list', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '交易明细';
    resObj.header.rightText = '筛选';
    res.render('cus/page/wallet/trans-list.tpl', resObj);
  });
  //我的钱包 —— 提现
  router.get('/wallet/withdrawals', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '提现';
    resObj.header.leftUrl = '/wallet';
    res.render('cus/page/wallet/withdrawals.tpl', resObj);
  });
  //我的钱包 —— 充值
  router.get('/wallet/recharges', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '充值';
    resObj.header.leftUrl = '/wallet';
    res.render('cus/page/wallet/recharges.tpl', resObj);
  });
  //我的钱包 —— 提现结果页
  router.get('/wallet/withdrawals-result', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '提现';
    resObj.header.leftUrl = '/wallet';
    res.render('cus/page/wallet/withdrawals-result.tpl', resObj);
  });
  //订单管理 ——所有订单
  router.get('/order', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '我的订单';
    resObj.header.tab = ['全部', '待付款', '待发货', '待收货', '退款中'];
    resObj.data = yog.require('cus/test/order.js');
    res.render('cus/page/order/index.tpl', resObj);
  });
  //订单详情
  router.get('/order/detail', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '订单详情';
    resObj.header.leftUrl = '/order';
    resObj.header.rightIcon = 'chat';
    resObj.order = {status: '' + req.query.status};
    resObj.data = yog.require('cus/test/order.js');
    res.render('cus/page/order/detail.tpl', resObj);
  });
  //订单结果
  router.get('/order/result', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '我的订单';
    resObj.header.leftIcon = false;
    resObj.result = {status: '' + req.query.status};
    if (resObj.result.status == 'confirmReceipt') {
      resObj.header.title = '确认收货';
      resObj.header.rightText = '完成';
    }
    res.render('cus/page/order/result.tpl', resObj);
  });
  //订单评论
  router.get('/order/comment', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '评论';
    resObj.header.leftUrl = '/order';
    res.render('cus/page/order/comment.tpl', resObj);
  });
  //拍卖列表
  router.get('/auction/list', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '拍卖列表';
    resObj.header.rightSort = {default: '时间排序', sorts: ['时间排序', '价格排序', '信誉排序', '保证金排序']};
    resObj.data = yog.require('cus/test/auction.js');
    res.render('cus/page/auction/list.tpl', resObj);
  });
  //拍品
  router.get('/auction/detail', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '千年古玉';
    resObj.header.leftUrl = '/auction/list';
    resObj.header.rightIcons = [{icon: 'collect'}, {icon: 'share'}];
    resObj.auctionStatus = req.query.status == null ? 0 : req.query.status;
    res.render('cus/page/auction/detail.tpl', resObj);
  });
  //店铺首页
  router.get('/store', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '小唐的店铺';
    resObj.header.rightIcons = [{icon: 'collect'}, {icon: 'share'}];
    resObj.banner = [{imgUrl: 'http://img3.imgtn.bdimg.com/it/u=1703259431,1215286552&fm=15&gp=0.jpg'}];
    res.render('cus/page/store.tpl', resObj);
  });
  //搜索页面
  router.get('/auction/search', function (req, res, next) {
    var resObj = req.appData;
    res.render('cus/page/auction/search.tpl', resObj);
  });
  //拍品分类
  router.get('/auction/category', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '分类';
    res.render('cus/page/auction/category.tpl', resObj);
  });
  //关于我们
  router.get('/about', function (req, res, next) {
    var resObj = req.appData;
    res.render('cus/page/about.tpl', resObj);
  });
  //WEUI
  router.get('/weui', function (req, res, next) {
    var resObj = req.appData;
    res.render('cus/page/weui.tpl', resObj);
  });
  //系统消息
  router.get('/user/sys-message', function (req, res, next) {
    var resObj = req.appData;
    res.render('cus/page/user/sys-message.tpl', resObj);
  });
  //用户消息
  router.get('/user/user-message', function (req, res, next) {
    var resObj = req.appData;
    res.render('cus/page/user/user-message.tpl', resObj);
  });
  //系统设置
  router.get('/settings/sys-settings', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '系统设置';
    resObj.header.settings = ['安全', '推送设置', '更新版本', '关于百多宝', '投诉建议']
    res.render('cus/page/settings/sys-settings.tpl', resObj);
  });
  //安全设置
  router.get('/user/safety-settings', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '系统设置';
    resObj.header.settings = ['修改密码', '更换手机号']
    res.render('cus/page/user/sys-settings.tpl', resObj);
  });
  //推送设置
  router.get('/settings/push-settings', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '推送设置';
    res.render('cus/page/settings/push-settings.tpl', resObj);
  });
  //版本更新
  router.get('/settings/version-update', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '版本更新';
    res.render('cus/page/settings/version-update.tpl', resObj);
  });
  //关于百多宝
  router.get('/settings/about-bdb', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '关于百多宝';
    res.render('cus/page/settings/about-bdb.tpl', resObj);
  });
  //投诉建议
  router.get('/settings/suggestions', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '投诉建议';
    res.render('cus/page/settings/suggestions.tpl', resObj);
  });
  //退款
  router.get('/user/to-return', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '退款';
    res.render('cus/page/user/to-return.tpl', resObj);
  });
  //申请平台介入
  router.get('/user/application-bdb', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '申请平台介入';
    res.render('cus/page/user/application-bdb.tpl', resObj);
  });
  //>>>>>>>>>>wallet(我的钱包)----------
  //wallet:cus/action/wallet/index.js
	//wallet/bank:cus/action/wallet/bank/index.js
	//wallet/bank/add:cus/action/wallet/bank/add.js
  //----------wallet(我的钱包)<<<<<<<<<<
};