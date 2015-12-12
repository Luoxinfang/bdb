module.exports = function (router) {
	var _ = require('lodash');
	var resObj = {
		header: {
			title: '百多宝',       //header标题
			leftIcon: 'back',     //头部左侧默认返回按钮
			leftUrl: '/mybdb',    //头部左侧图标默认链接
			rightIcon: false,     //右侧单个图标
			rightUrl: false,      //右侧图标或文字链接
			rightIcons: false,    //右侧图标组
			rightText: false,     //右侧文字
			rightSort: false,     //右侧排序数组
			nav: ['系统消息', '用户消息'],     //头部nav数组
			tab: ['全部', '进行中', '未开始'],  //头部tab数组
			set: false
		},
		banner: [
			{imgUrl: 'http://img3.imgtn.bdimg.com/it/u=1703259431,1215286552&fm=15&gp=0.jpg'},
			{imgUrl: 'http://img3.imgtn.bdimg.com/it/u=1703259431,1215286552&fm=15&gp=0.jpg'},
			{imgUrl: 'http://img3.imgtn.bdimg.com/it/u=1703259431,1215286552&fm=15&gp=0.jpg'}
		]
	};

	router.get('*', function (req, res, next) {
		next();
	});

	//商家端首页--我的百多宝
	router.get('/',function(req,res,next){
		var obj = _.cloneDeep(resObj);
		obj.header.title = '我的百多宝';
		obj.header.leftIcon = false;
		obj.header.rightIcon = 'msg';
		res.render('bus/page/mybdb.tpl',obj);
	});
	//登录
	router.get('/login', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		res.render('bus/page/user/login.tpl', obj);
	});
	//注册 —— 输入电话号码
	router.get('/reg-tel', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '注册';
		obj.header.leftUrl = '/login';
		res.render('bus/page/user/reg-tel.tpl', obj);
	});
	//注册 —— 设置密码
	router.get('/reg-pwd', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '注册';
		obj.header.leftUrl = '/reg-tel';
		res.render('bus/page/user/reg-pwd.tpl', obj);
	});
	//找回密码 —— 输入信息
	router.get('/find-pwd-info', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '找回密码';
		obj.header.leftUrl = '/login';
		res.render('bus/page/user/find-pwd-info.tpl', obj);
	});
	//找回密码 —— 设置新密码
	router.get('/find-pwd-new', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '找回密码';
		obj.header.leftUrl = '/find-pwd-info';
		res.render('bus/page/user/find-pwd-new.tpl', obj);
	});
	//找回密码 —— 找回密码结果页
	router.get('/find-pwd-result', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '找回密码';
		obj.header.leftIcon = false;
		res.render('bus/page/user/find-pwd-result.tpl', obj);
	});
	//绑定第三方账号 —— 输入信息
	router.get('/bind-account-info', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '绑定第三方账号';
		obj.header.leftIcon = false;
		res.render('bus/page/user/bind-account-info.tpl', obj);
	});
	//绑定第三方账号 —— 设置新密码
	router.get('/bind-account-pwd', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '绑定第三方账号';
		obj.header.leftUrl = '/bind-account-info';
		res.render('bus/page/user/bind-account-pwd.tpl', obj);
	});
	//修改密码
	router.get('/change-pwd', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '修改密码';
		res.render('bus/page/user/change-pwd.tpl', obj);
	});
	//更换手机号 —— 验证
	router.get('/change-tel-info', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '更换手机号';
		res.render('bus/page/user/change-tel-info.tpl', obj);
	});
	//更换手机号 —— 输入新号码
	router.get('/change-tel-new', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '更换手机号';
		obj.header.leftUrl = '/change-tel-info';
		res.render('bus/page/user/change-tel-new.tpl', obj);
	});
	//收货地址
	router.get('/receipt-address', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '收货地址';
		res.render('bus/page/user/receipt-address.tpl', obj);
	});
	//我的钱包 —— 首页
	router.get('/wallet', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '我的钱包';
		res.render('bus/page/wallet/index.tpl', obj);
	});
	//我的钱包 —— 提现
	router.get('/withdrawals', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '提现';
		obj.header.leftUrl = '/wallet';
		res.render('bus/page/wallet/withdrawals.tpl', obj);
	});
	//我的钱包 —— 提现结果页
	router.get('/withdrawals-result', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '提现';
		obj.header.leftUrl = '/wallet';
		res.render('bus/page/wallet/withdrawals-result.tpl', obj);
	});
	//我的钱包 ——添加银行卡
	router.get('/add-bank-card', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '添加银行卡';
		obj.header.leftUrl = '/wallet';
		res.render('bus/page/wallet/add-bank-card.tpl', obj);
	});
	//订单管理 ——首页
	router.get('/order', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '订单管理';
		obj.header.tab = ['待发货', '待付款', '已发货', '退款中'];
		//假数据
		obj.data = yog.require('bus/test/order.js');
		//obj.header.leftUrl = '/wallet';
		res.render('bus/page/order/index.tpl', obj);
	});
	//订单管理 ——订单详情
	router.get('/order-detail', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '订单详情';
		//假数据
		obj.data = yog.require('bus/test/order-detail.js');
		obj.header.leftUrl = '/bus/order';
		res.render('bus/page/order/order-detail.tpl', obj);
	});
	//订单管理 ——已完成
	router.get('/completed', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '订单管理';
		obj.header.rightText = '已完成';
		//假数据
		obj.data = yog.require('bus/test/order.js');
		obj.data.status = 'ywc';
		//obj.header.backUrl = '/wallet';
		res.render('bus/page/order/completed.tpl', obj);
	});
	//订单管理 ——已关闭
	router.get('/closed', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '订单管理';
		obj.header.rightText = '已关闭';
		//假数据
		obj.data = yog.require('bus/test/order.js');
		obj.data.status = 'ygb';
		//resObj.header.backUrl = '/wallet';
		res.render('bus/page/order/closed.tpl', obj);
	});
	//评论
	router.get('/evaluation', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '评论';
		//假数据
		obj.data = yog.require('bus/test/order.js');
		//resObj.header.backUrl = '/wallet';
		res.render('bus/page/order/evaluation.tpl', obj);
	});
	//商家端我的百多宝
	router.get('/mybdb', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '我的百多宝';
		obj.header.leftIcon = false;
		obj.header.rightIcon = 'msg';
		res.render('bus/page/user/mybdb.tpl', obj);
	});
	//活动
	router.get('/activity-index', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '活动';
		obj.header.tab = ['已开始', '未开始', '已介绍'];
		res.render('bus/page/activity/activity-index.tpl', obj);
	});
	//国庆专场
	router.get('/national-day', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '国庆专场';
		obj.header.tab = ['拍卖中', '未开始', '已结束'];
		res.render('bus/page/activity/national-day.tpl', obj);
	});
	//平台活动
	router.get('/bdb-activity', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '平台活动';
		obj.header.tab = ['已开始', '已介绍'];
		//假数据
		obj.data = yog.require('bus/test/auction.js');
		res.render('bus/page/activity/bdb-activity.tpl', obj);
	});
	//添加活动
	router.get('/add-activity', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '发起活动';
		res.render('bus/page/activity/add-activity.tpl', obj);
	});
	//活动详情
	router.get('/activity/detail', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '翡翠专场';
		res.render('bus/page/activity/detail.tpl', obj);
	});
	//地区选择
	router.get('/select-address', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '地区选择';
		res.render('bus/page/address/select-address.tpl', obj);
	});
	//输入邮箱
	router.get('/input-email', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '地区选择';
		res.render('bus/page/address/input-email.tpl', obj);
	});
	//展示模板
	router.get('/show-template', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '展示模板';
		res.render('bus/page/user/show-template.tpl', obj);
	});
	//系统消息
	router.get('/sys-message', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		res.render('bus/page/user/sys-message.tpl', obj);
	});
	//用户消息
	router.get('/user-message', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		res.render('bus/page/user/user-message.tpl', obj);
	});
	//卡片管理
	router.get('/card-management', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '银行卡管理';
		obj.header.rightText = '删除';
		res.render('bus/page/account/card-management.tpl', obj);
	});
	//系统设置
	router.get('/sys-settings', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '系统设置';
		obj.header.set = ['安全', '推送设置', '更新版本', '关于百多宝', '投诉建议']
		res.render('bus/page/settings/sys-settings.tpl', obj);
	});
	//安全设置
	router.get('/safety-settings', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '系统设置';
		obj.header.set = ['修改密码', '更换手机号']
		res.render('bus/page/settings/sys-settings.tpl', obj);
	});
	//推送设置
	router.get('/push-settings', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '推送设置';
		res.render('bus/page/settings/push-settings.tpl', obj);
	});
	//版本更新
	router.get('/version-update', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '版本更新';
		res.render('bus/page/settings/version-update.tpl', obj);
	});
	//关于百多宝
	router.get('/about-bdb', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '关于百多宝';
		res.render('bus/page/settings/about-bdb.tpl', obj);
	});
	//投诉建议
	router.get('/suggestions', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '投诉建议';
		res.render('bus/page/settings/suggestions.tpl', obj);
	});
	//退款
	router.get('/to-return', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '退款';
		res.render('bus/page/user/to-return.tpl', obj);
	});
	//申请平台介入
	router.get('/application-bdb', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '申请平台介入';
		res.render('bus/page/user/application-bdb.tpl', obj);
	});
	//店铺
	router.get('/store/apply', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '申请开店';
		res.render('bus/page/store/apply.tpl', obj);
	});
	//店铺管理
	router.get('/store/manage', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '店铺管理';
		res.render('bus/page/store/manage.tpl', obj);
	});
	//店铺主营分类
	router.get('/store/category', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '主营分类';
		res.render('bus/page/store/category.tpl', obj);
	});
	//拍卖行
	router.get('/auction/list', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '拍卖行';
		obj.header.tab = ['拍卖中', '未开始', '已结束'];
		obj.data = yog.require('bus/test/auction.js');
		res.render('bus/page/auction/list.tpl', obj);
	});
	//拍品详情
	router.get('/auction/detail', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '千年古玉';
		obj.header.rightIcon = 'share';
		obj.header.leftUrl = '/auction/list';
		obj.auctionStatus = req.query.status == null ? 0 : req.query.status;
		res.render('bus/page/auction/detail.tpl', obj);
	});
	//货架
	router.get('/shelves/list', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '货架';
		obj.header.rightText = '上传商品';
		obj.header.rightUrl = '/shelves/add';
		obj.header.tab = ['拍品', '一口价', '审核中'];
		obj.data = yog.require('bus/test/auction.js');
		res.render('bus/page/shelves/list.tpl', obj);
	});
	//上传商品
	router.get('/shelves/add', function (req, res, next) {
		var obj = _.cloneDeep(resObj);
		obj.header.title = '上传商品';
		res.render('bus/page/shelves/add.tpl', obj);
	});
};