/**
 * @author chenzhenhua
 * @createTime 2015-12-28
 * @description 这个路由处理订单详情页
 */

var _ = require('lodash');
var orderModel = yog.require('_common/model/order.js');

module.exports.get = function (req, res) {
	var param = {
		token: req.session.user.token,
		orderNo: req.params.orderNo,
		page: '1',
		pageSize: '8'
	};
	orderModel.queryDetail(param).then(function (rs) {
		var resObj = req.appData;
		resObj.header.title = '订单详情';
		if (0 == rs.status) {
			resObj.header.rightIcon = 'chat';
			resObj.order = rs.data;
			res.render('cus/page/order/detail.tpl', resObj);
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
