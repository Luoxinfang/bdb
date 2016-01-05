/**
 * @author chenzhenhua
 * @createTime 2015-12-29
 * @description 零钱支付
 */

var _ = require('lodash');
var md5 = require('md5');
var orderModel = yog.require('_common/model/order.js');

module.exports.post = function (req, res, next) {
	var params = {
		token: req.session.user.token,
		sign: req.session.sign,
		payPasswd: md5(req.body.payPwd),
		orderNo: req.body.orderNo
	}
	orderModel.payByWallet(params).then(function (rs) {
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};