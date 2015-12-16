/**
 * @author chenzhenhua
 * @createTime 2015-12-15
 * @description 这个路由处理我的钱包首页
 */

var md5 = require('md5');
var _ = require('lodash');
var cashModel = yog.require('_common/model/cash.js');
var resObj = {
	header: {
		title: '百多宝',       //header标题
		leftIcon: 'back',     //左侧默认返回按钮
		leftUrl: '/',         //左侧图标默认链接
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
// all
module.exports = function (req, res, next) {
	var params = {
		token: req.session.user.token
	};
	var obj = _.cloneDeep(resObj);
	obj.header.title = '我的钱包';
	obj.payPwdRecomplete = 1;
	obj.cashMoney = 0;
	cashModel.queryCash(params).then(function (rs) {
		console.log('>>>>>>>>>>查询账户余额----------\n', rs, '\n----------查询账户余额<<<<<<<<<<');
		obj.cashMoney = rs.cashmoney;
		if (obj.cashMoney > 0) {
			res.render('cus/page/wallet/index.tpl', obj);
		} else {
			cashModel.queryPwd(params).then(function (rs) {
				console.log('>>>>>>>>>>查询是否设置交易密码----------\n', rs, '\n----------查询是否设置交易密码<<<<<<<<<<');
				obj.payPwdRecomplete = rs.recomplete;
				res.render('cus/page/wallet/index.tpl', obj);
			}).catch(function (error) {
				yog.log.fatal(error);
			});
		}
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};
// get
module.exports.get = function (req, res, next) {

};
// post
module.exports.post = function (req, res, next) {

};
// put
module.exports.put = function (req, res, next) {

};
// delet
module.exports.delete = function (req, res, next) {

};