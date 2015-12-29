/**
 * @author chenzhenhua
 * @createTime 2015-12-29
 * @description 延时收货
 */

var orderModel = yog.require('cus/model/order.js');

module.exports.post = function (req, res, next) {
	var params = {
		token: req.session.user.token,
		orderNo: req.body.orderNo,
		days: req.body.days || '3'
	}
	orderModel.delayReceive(params).then(function (rs) {
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};