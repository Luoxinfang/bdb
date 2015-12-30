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
  //商家端首页--我的百多宝
  router.get('/', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title: '我的百多宝',
      leftUrl: false,
      rightIcon: 'msg'
    });
    res.render('bus/page/index.tpl', resObj);
  });
  //登录
  router.get('/login', function (req, res, next) {
    res.render('bus/page/session/login.tpl', req.appData);
  });
  //注册 —— 输入电话号码
  router.get('/reg-tel', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title: '注册',
      leftUrl: '/login',
      rightIcon: 'msg'
    });
    res.render('bus/page/user/reg-tel.tpl', resObj);
  });
  //注册 —— 设置密码
  router.get('/reg-pwd', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title: '注册',
      leftUrl : '/reg-tel'
    });
    res.render('bus/page/user/reg-pwd.tpl', resObj);
  });
  //找回密码 —— 输入信息
  router.get('/find-pwd-info', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title: '找回密码',
      leftUrl : '/login'
    });
    res.render('bus/page/user/find-pwd-info.tpl', resObj);
  });
  //找回密码 —— 设置新密码
  router.get('/find-pwd-new', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title: '找回密码',
      leftUrl : '/find-pwd-info'
    });
    res.render('bus/page/user/find-pwd-new.tpl', resObj);
  });
  //找回密码 —— 找回密码结果页
  router.get('/find-pwd-result', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title: '找回密码',
      leftIcon : false
    });
    res.render('bus/page/user/find-pwd-result.tpl', resObj);
  });
  //绑定第三方账号 —— 输入信息
  router.get('/bind-account-info', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title: '绑定第三方账号',
      leftIcon : false
    });
    res.render('bus/page/user/bind-account-info.tpl', resObj);
  });
  //绑定第三方账号 —— 设置新密码
  router.get('/bind-account-pwd', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title: '绑定第三方账号',
      leftUrl : '/bind-account-info'
    });
    res.render('bus/page/user/bind-account-pwd.tpl', resObj);
  });
  //修改密码
  router.get('/user/change-pwd', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title =  '修改密码'
    res.render('bus/page/user/change-pwd.tpl', resObj);
  });
  //更换手机号 —— 验证
  router.get('/user/change-tel-info', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '更换手机号'
    res.render('bus/page/user/change-tel-info.tpl', resObj);
  });
  //更换手机号 —— 输入新号码
  router.get('/change-tel-new', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title: '更换手机号',
      leftUrl : '/change-tel-info'
    });
    res.render('bus/page/user/change-tel-new.tpl', resObj);
  });
  //收货地址
  router.get('/receipt-address', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '收货地址';
    res.render('bus/page/user/receipt-address.tpl', resObj);
  });
  //我的钱包 —— 首页
  router.get('/wallet', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '我的钱包';
    res.render('bus/page/wallet/index.tpl', resObj);
  });
  //我的钱包 —— 提现
  router.get('/withdrawals', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '提现';
    resObj.header.leftUrl = '/wallet';
    res.render('bus/page/wallet/withdrawals.tpl', resObj);
  });
  //我的钱包 —— 提现结果页
  router.get('/withdrawals-result', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '提现';
    resObj.header.leftUrl = '/wallet';
    res.render('bus/page/wallet/withdrawals-result.tpl', resObj);
  });
  //我的钱包 ——添加银行卡
  router.get('/add-bank-card', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '添加银行卡';
    resObj.header.leftUrl = '/wallet';
    res.render('bus/page/wallet/add-bank-card.tpl', resObj);
  });
  //订单管理 ——首页
  router.get('/order', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '订单管理';
    resObj.header.tab = ['待发货', '待付款', '已发货', '退款中'];
    //假数据
    resObj.data = yog.require('bus/test/order.js');
    //obj.header.leftUrl = '/wallet';
    res.render('bus/page/order/index.tpl', resObj);
  });
  //订单管理 ——订单详情
  router.get('/order-detail', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '订单详情';
    //假数据
    resObj.data = yog.require('bus/test/order-detail.js');
    resObj.header.leftUrl = '/bus/order';
    res.render('bus/page/order/detail.tpl', resObj);
  });
  //订单管理 ——已完成
  router.get('/completed', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '订单管理';
    resObj.header.rightText = '已完成';
    //假数据
    resObj.data = yog.require('bus/test/order.js');
    resObj.data.status = 'ywc';
    //obj.header.backUrl = '/wallet';
    res.render('bus/page/order/completed.tpl', resObj);
  });
  //订单管理 ——已关闭
  router.get('/closed', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '订单管理';
    resObj.header.rightText = '已关闭';
    //假数据
    resObj.data = yog.require('bus/test/order.js');
    resObj.data.status = 'ygb';
    //resObj.header.backUrl = '/wallet';
    res.render('bus/page/order/closed.tpl', resObj);
  });
  //评论
  router.get('/evaluation', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '评论';
    //假数据
    resObj.data = yog.require('bus/test/order.js');
    //resObj.header.backUrl = '/wallet';
    res.render('bus/page/order/evaluation.tpl', resObj);
  });
  //活动专场
  router.get('/activity/activity-session', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = req.query.activename;
    resObj.header.tab = ['拍卖中', '未开始', '已结束'];
    resObj.header.tab = {
      cur: 'auction',
      list: [
        {val: '拍卖中', id: 'auction'},
        {val: '未开始', id: 'notStart'},
        {val: '已结束', id: 'end'}
      ]
    };
    res.render('bus/page/activity/activity-session.tpl', resObj);
  });
  //添加活动
  router.get('/activity/add-activity', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '发起活动';
    resObj.sTime =

    res.render('bus/page/activity/add-activity.tpl',resObj);
  });
  //地址选择
  router.get('/address/select-address', function (req, res, next) {
    var resObj = req.appData;
      resObj.header.title = '地址';
      resObj.province = req.query.province;
      resObj.city = req.query.city;
      resObj.street = req.query.street;
    res.render('bus/page/store/select-address.tpl', resObj);
  });
  //输入邮箱
  router.get('/address/input-email', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '邮箱';
    resObj.email = req.query.email;
    res.render('bus/page/store/input-email.tpl', resObj);
  });
  //展示模板
  router.get('/store/show-template', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title: '展示模板'
    });
    res.render('bus/page/store/show-template.tpl', resObj);
  });
  //系统消息
  router.get('/user/sys-message', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title: '系统消息'
    });
    res.render('bus/page/user/sys-message.tpl', resObj);
  });
  //用户消息
  router.get('/user/user-message', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title: '用户消息'
    });
    res.render('bus/page/user/user-message.tpl', obj);
  });
  //卡片管理
  router.get('/account/card-management', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title: '银行卡管理',
      rightText:'删除'
    });
    res.render('bus/page/account/card-management.tpl', resObj);
  });
  //系统设置
  router.get('/settings/sys-settings', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title: '系统设置',
      settings: ['安全', '推送设置', '更新版本', '关于百多宝', '投诉建议']
    });
    res.render('bus/page/settings/sys-settings.tpl', resObj);
  });
  //安全设置
  router.get('/settings/safety-settings', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '系统设置';
    resObj.header.settings = ['修改密码', '更换手机号']
    res.render('bus/page/settings/safety-settings.tpl', resObj);
  });
  //推送设置
  router.get('/settings/push-settings', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title: '推送设置'
    });
    res.render('bus/page/settings/push-settings.tpl', resObj);
  });
  //版本更新
  router.get('/settings/version-update', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title: '版本更新'
    });
    res.render('bus/page/settings/version-update.tpl', resObj);
  });
  //关于百多宝
  router.get('/settings/about-bdb', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title: '关于百多宝'
    });
    res.render('bus/page/settings/about-bdb.tpl', resObj);
  });
  //投诉建议
  router.get('/settings/suggestions', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title: '投诉建议'
    });
    res.render('bus/page/settings/suggestions.tpl', resObj);
  });
  //退款
  router.get('/user/to-return', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title: '退款'
    });
    res.render('bus/page/user/to-return.tpl', resObj);
  });
  //申请平台介入
  router.get('/user/application-bdb', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title: '申请平台介入'
    });
    res.render('bus/page/user/application-bdb.tpl', resObj);
  });
  //店铺
  router.get('/store/apply', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title: '申请开店',
    });
    res.render('bus/page/store/apply.tpl', resObj);
  });
  //资质认证
  router.get('/store/qualification', function (req, res, next) {
    var resObj = req.appData;
    resObj.header.title = '资质认证';
    resObj.storeName = req.query.storeName;
    res.render('bus/page/store/qualification.tpl', resObj);
  });
  //拍卖行
  router.get('/auction/list', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title: '拍卖行',
      tab: ['拍卖中', '未开始', '已结束'],
      data:yog.require('bus/test/auction.js')
    });
    res.render('bus/page/auction/list.tpl', resObj);
  });
  //拍品详情
  router.get('/auction/detail', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title: '千年古玉',
      rightIcon: 'share',
      leftUrl: '/auction/list',
      auctionStatus:req.query.status == null ? 0 : req.query.status
    });
    res.render('bus/page/auction/detail.tpl', resObj);
  });
  //货架
  router.get('/shelves/list', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title: '货架',
      rightText : '上传商品',
      rightUrl : '/shelves/add',
      tab:['拍品', '一口价', '审核中'],
      data:yog.require('bus/test/auction.js'),
      rightIcon: 'share',
      leftUrl: '/auction/list',
      auctionStatus:req.query.status == null ? 0 : req.query.status
    });
    res.render('bus/page/shelves/list.tpl', resObj);
  });
  //上传商品
  router.get('/shelves/add', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title: '上传商品',
    });
    res.render('bus/page/shelves/add.tpl', resObj);
  });
  //单品上架页面
  router.get('/shelves/detail', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title: '满绿翡翠吊坠',
    });
    res.render('bus/page/shelves/detail.tpl', resObj);
  });
  //上架选择页面
  router.get('/shelves/shelve', function (req, res, next) {
    var resObj = req.appData;
    _.extend(resObj.header, {
      title: '拍品上架',
      shelvesEditable: true,
      data:yog.require('bus/test/auction.js')
    });
    res.render('bus/page/shelves/shelve.tpl', resObj);
  });
};