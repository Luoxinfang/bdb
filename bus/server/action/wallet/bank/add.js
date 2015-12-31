/**
 * @author chenzhenhua
 * @createTime 2015-12-17
 * @description 这个路由处理银行卡增加页面
 */

var md5 = require('md5');
var _ = require('lodash');
var cashModel = yog.require('_common/model/cash.js');
var userModel = yog.require('_common/model/user.js')
var tip = yog.require('_common/lib/tip.js');

//银行卡新增页面
module.exports = function (req, res, next) {
	var params = {
		token: req.session.user.token
	};
	userModel.complete({
		token: req.session.user.token,
	}).then(function (rs) {
		var resObj = req.appData;
		resObj.header.title = '添加银行卡';
		if ('0' == rs.status) {
			resObj.realInfo = rs.data;
			resObj.validPayPwd = (+new Date() - req.session.validPayPwdTime) <= 60000;
			res.render('cus/page/wallet/bank/add.tpl', resObj);
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