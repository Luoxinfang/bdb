/**
 * @author chenzhenhua
 * @createTime 2015-12-29
 * @description 确认收货
 */

var md5 = require('md5');
var orderModel = yog.require('cus/model/order.js');

module.exports.post = function (req, res, next) {
	var params = {
		token: req.session.user.token,
		payPasswd: md5(req.body.payPwd),
		orderNo: req.body.orderNo
	}
	orderModel.confirmReceive(params).then(function (rs) {
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};