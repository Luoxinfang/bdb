/**
 * @author chenzhenhua
 * @createTime 2016-01-03
 * @description 订单投诉
 */

var _ = require('lodash');
var orderModel = yog.require('cus/model/order.js');

module.exports.get = function (req, res) {
	//var param = {
	//	token: req.session.user.token,
	//	orderNo: req.params.orderNo,
	//	page: '1',
	//	pageSize: '8'
	//};
	//orderModel.queryDetail(param).then(function (rs) {
	//	var resObj = req.appData;
	//	resObj.header.title = '评论';
	//	if (0 == rs.status) {
	//		resObj.detail = rs;
	//		res.render('cus/page/order/comment.tpl', resObj);
	//	} else {
	//		var error = _.extend({
	//			header: resObj.header
	//		}, tip.getTip(rs.status));
	//		res.render('_common/page/result.tpl', error);
	//	}
	//}).catch(function (error) {
	//	yog.log.fatal(error);
	//});
	var resObj = req.appData;
	resObj.header.title = '申请平台介入';
	res.render('cus/page/order/complain.tpl', resObj);
};

module.exports.put = function (req, res) {
	var param = {
		token: req.session.user.token,
		orderNo: req.body.orderNo,
		data: req.body.data,
		qualityStar: req.body.qualityStar,
		serviceStar: req.body.serviceStar,
		sendStar: req.body.sendStar
	};
	orderModel.comment(param).then(function (rs) {
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};