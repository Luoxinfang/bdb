module.exports = function (router) {
  var _ = require('lodash');
  var app = yog.require('_common/model/app.js');

  router.get('*', function (req, res, next) {
    //需要验证登录的接口
    var userPath = /^\/(user|order|wallet|auction)\/*\w*/;
    //console.log(userPath.test(req.path) , !req.session.user);
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


  //注册登录相关------------------------------
  //登录
  router.get('/login', function (req, res, next) {
    res.render('cus/page/session/login.tpl', req.appData);
  });
  //注册 —— 输入电话号码
  router.get('/reg', function (req, res, next) {
    req.appData.header.title = '注册';
    res.render('_common/page/acc/reg.tpl', req.appData);
  });
  //找回密码
  router.get('/acc/recovery', function (req, res, next) {
    req.appData.header.title = '找回密码';
    res.render('_common/page/acc/recovery.tpl', req.appData);
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
  //个人主页基本信息修改
  router.get('/user/update-info', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      rightText: '确定',
      leftUrl: '/user/personal',
    })
    if (req.query.type == 'nick') {
      resObj.header.title = '修改呢称';
    } else if (req.query.type == 'qq') {
      resObj.header.title = '修改QQ号';
    }
    resObj.updateVal = req.query.updateVal;
    res.render('cus/page/user/update-info.tpl', resObj);
  });
  //实名认证
  router.get('/user/check-name', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title: '实名认证',
      rightText: '确定',
      leftUrl: '/user/personal',
    })
    res.render('cus/page/user/check-name.tpl', resObj);
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

  //拍品-------------------
  //拍卖列表
  router.route('/auction/activity/:id').get(router.action('auction/activity').get);
  //拍品详情
  router.route('/auction/detail/:id').get(router.action('auction/detail').get);
  //


  //店铺首页
  router.get('/store', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '小唐的店铺';
    resObj.header.rightIcons = [{icon: 'subscribe'}, {icon: 'share'}];
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
  //系统设置
  router.get('/settings/sys-settings', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '系统设置';
    resObj.header.settings = ['安全', '推送设置', '更新版本', '关于百多宝', '投诉建议']
    res.render('cus/page/settings/sys-settings.tpl', resObj);
  });
  //安全设置
  router.get('/settings/safety-settings', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '系统设置';
    resObj.header.settings = ['修改密码', '更换手机号']
    res.render('cus/page/settings/safety-settings.tpl', resObj);
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
  //wallet/withdraw:cus/action/wallet/withdraw.js
  router.get('/wallet/recharge', function (req, res, next) {
    req.appData.header.title = '充值';
    res.render('cus/page/wallet/recharge.tpl', req.appData);
  });
  //wallet/trans-list:ucs/action/wallet/trans-list
  //----------wallet(我的钱包)<<<<<<<<<<

	//>>>>>>>>>>order(订单)----------
	//order/list:cus/action/order/list.js
	//订单详情
	router.route('/order/detail/:orderNo').get(router.action('order/detail').get);
	//----------order(订单)<<<<<<<<<<
};