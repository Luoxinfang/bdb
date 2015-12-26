/**
 * @author chenzhenhua
 * @createTime 2015-12-25
 * @description 这个路由处理订单列表页
 */

var md5 = require('md5');
var _ = require('lodash');
var orderModel = yog.require('_common/model/order.js');
var tip = yog.require('_common/lib/tip.js');

module.exports = function (req, res, next) {
	var params = {
		token: req.session.user.token,
		page: req.query.page || '1',
		pageSize: req.query.pageSize || '8'
	};
	var resObj = req.appData;
	resObj.header.title = '我的订单';
	resObj.header.tab = ['全部', '待付款', '待发货', '待收货', '退款中'];
	orderModel.query(params).then(function (rs) {
		if (0 == rs.status) {
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