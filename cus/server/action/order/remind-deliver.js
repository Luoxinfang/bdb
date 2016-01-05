/**
 * @author chenzhenhua
 * @createTime 2015-12-29
 * @description 提现发货
 */

var orderModel = yog.require('_common/model/order.js');

module.exports.post = function (req, res, next) {
	var params = {
		token: req.session.user.token,
		sign: req.session.sign,
		orderNo: req.body.orderNo
	}
	orderModel.remindDeliver(params).then(function (rs) {
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};