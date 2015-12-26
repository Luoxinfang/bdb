/**
 * @author chenzhenhua
 * @createTime 2015-12-25
 * @description 这个路由处理订单列表页
 */

var md5 = require('md5');
var _ = require('lodash');
var orderModel = yog.require('_common/model/order.js');
var tip = yog.require('_common/lib/tip.js');
/**
 * 订单状态,'orderstatus+paystatus+sendflag+receiveflag+pointflag'
 * '订单状态+支付状态+发货状态+收货状态+评论状态'
 */
var orderStatus = {
	'00000': '待付款',
	'01000': '待发货',
	'01100': '待收货',
	'11110': '待评价',
	'11111': '交易完成'
};
module.exports = function (req, res, next) {
	var params = {
		token: req.session.user.token,
		page: req.query.page || '1',
		pageSize: req.query.pageSize || '8'
	};
	var resObj = req.appData;
	resObj.header.title = '我的订单';
	resObj.header.tab = [
		{val: '待付款', id: "", default: true},
		{val: '待发货', id: ""},
		{val: '待收货', id: ""},
		{val: '已收货', id: ""},
		{val: '退货中', id: ""},
		{val: '已关闭', id: ""}];
	orderModel.query(params).then(function (rs) {
		if (0 == rs.status) {
			resObj.orderStatus = orderStatus;
			resObj.orderList = rs.list;
			res.render('cus/page/order/list.tpl', resObj);
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