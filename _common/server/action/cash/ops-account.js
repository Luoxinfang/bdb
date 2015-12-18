/**
 * Created by chenzhenhua on 2015/12/18.
 * 账户相关操作前验证
 */

var md5 = require('md5');
var _ = require('lodash');
var cashModel = require('../../model/cash.js');

// 验证支付密码并返回sign
module.exports.post = function (req, res, next) {
	var params = {
		token: req.session.user.token,
		payPwd: md5(req.body.payPwd)
	}
	cashModel.opsAccount(params).then(function (rs) {
		if (0 == rs.status) {
			req.session.oldPayPwd = req.body.payPwd;
			req.session.validPayPwdTime = +new Date();
			req.session.sign = rs.sign;
			req.session.signTime = +new Date();
		}
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};