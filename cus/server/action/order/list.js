/**
 * @author chenzhenhua
 * @createTime 2015-12-25
 * @description 这个路由处理订单列表页
 */

var md5 = require('md5');
var _ = require('lodash');
var orderModel = yog.require('_common/model/order.js');
var tip = yog.require('_common/lib/tip.js');
//var orderStatus = {
//	'dfk': { // 待付款
//		orderStatus: '0',
//		payStatus: '0'
//	},
//	'dfh': { // 待发货
//		orderStatus: '0',
//		payStatus: '1',
//		sendFlag: '0',
//		revokeStatus: '0'
//	},
//	'dsh': { // 待收货
//		orderStatus: '0',
//		payStatus: '1',
//		sendFlag: '1',
//		receiveFlag: '0',
//		revokeStatus: '0'
//	},
//	'ysh': { // 已收货
//		orderStatus: '1',
//		payStatus: '1',
//		sendFlag: '1',
//		receiveFlag: '1',
//		revokeStatus: '0'
//	},
//	'thz': { // 退货中
//		orderStatus: '0',
//		payStatus: '1',
//		revokeStatus: '1'
//	},
//	'ygb': { // 已关闭
//		orderStatus: '2'
//	}
//};
var orderStatus = {
	'dfk': { // 待付款
		orderStatus: '1'
	},
	'dfh': { // 待发货
		orderStatus: '2'
	},
	'dsh': { // 待收货
		orderStatus: '3'
	},
	'ysh': { // 已收货
		orderStatus: '4'
	},
	'thz': { // 退货中
		orderStatus: '5'
	},
	'ygb': { // 已关闭
		orderStatus: '6'
	}
};
module.exports = function (req, res, next) {
	var sessionStatus = '';
	if (req.session.orderList) {
		sessionStatus = req.session.orderList.status;
	} else {
		req.session.orderList = {};
	}
	var status = 'undefined' == typeof req.query.status ? (sessionStatus || 'dfk') : req.query.status;
	req.session.orderList.status = status;
	var params = _.extend({
		token: req.session.user.token,
		page: req.query.page || '1',
		pageSize: req.query.pageSize || '10'
	}, orderStatus[status]);
	var resObj = req.appData;
	resObj.header.title = '我的订单';
	resObj.header.tab = {
		cur: status,
		list: [
			{val: '待付款', id: 'dfk'},
			{val: '待发货', id: 'dfh'},
			{val: '待收货', id: 'dsh'},
			{val: '已收货', id: 'ysh'},
			{val: '退货中', id: 'thz'},
			{val: '已关闭', id: 'ygb'}
		]
	};
	orderModel.query(params).then(function (rs) {
		if (0 == rs.status) {
			resObj.data = rs;
			resObj.type = 'cus';
			if (req.query.type) {
				res.render('_common/widget/order/list.tpl', resObj);
			} else {
				res.render('cus/page/order/list.tpl', resObj);
			}
		} else {
			var error = _.extend({
				header: resObj.header
			}, tip.getTip(rs.status));
			res.render('_common/page/result.tpl', error);
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