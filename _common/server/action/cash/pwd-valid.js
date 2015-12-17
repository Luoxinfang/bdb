/**
 * Created by chenzhenhua on 2015/12/17.
 * 验证支付密码
 */

var md5 = require('md5');
var _ = require('lodash');
var cashModel = require('../../model/cash.js');

// 验证支付密码
module.exports.post = function (req, res, next) {
	console.log(req.body);
	var params = {
		token: req.session.user.token,
		payPwd: md5(req.body.payPwd),
		drawPwd: ''
	}
	cashModel.validPwd(params).then(function (rs) {
		console.log('>>>>>>>>>>验证支付密码----------\n', rs, '\n----------验证支付密码<<<<<<<<<<');
		if (0 == rs.status) {
			req.session.oldPayPwd = req.body.payPwd;
			req.session.validPayPwdTime = +new Date();
		}
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};