/**
 * @author chenzhenhua
 * @createTime 2015-12-25
 * @description 这个路由处理订单列表页
 */

var md5 = require('md5');
var _ = require('lodash');
var orderModel = yog.require('_common/model/order.js');
var tip = yog.require('_common/lib/tip.js');
var orderStatus = {
	'dfh': { // 待发货
		orderStatus: '2'
	},
	'dfk': { // 待付款
		orderStatus: '1'
	},
	'yfh': { // 已发货
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
	var status = 'undefined' == typeof req.query.status ? (sessionStatus || 'dfh') : req.query.status;
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
			{val: '待发货', id: 'dfh'},
			{val: '待付款', id: 'dfk'},
			{val: '已发货', id: 'yfh'},
			{val: '已收货', id: 'ysh'},
			{val: '退货中', id: 'thz'},
			{val: '已关闭', id: 'ygb'}
		]
	};
	orderModel.query(params).then(function (rs) {
		if (0 == rs.status) {
			resObj.data = rs;
			if (req.query.type) {
				res.render('_common/widget/order/list.tpl', resObj);
			} else {
				res.render('bus/page/order/list.tpl', resObj);
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