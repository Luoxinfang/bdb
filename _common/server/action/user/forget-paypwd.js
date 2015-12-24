/**
 * @author chenzhenhua
 * @createTime 2015-12-24
 * @description 这个路由处理忘记支付密码
 */

var md5 = require('md5');
var _ = require('lodash');
var model = yog.require('_common/model/user.js');

// 验证
module.exports.get = function (req, res, next) {
	var params = {
		token: req.session.user.token,
		userName: req.session.user.username,
		code: req.query.code,
		passPwd: md5(req.query.passPwd)
	}
	model.validForgetPayPwd(params).then(function (rs) {
		if (0 == rs.status) {
			req.session.sign = rs.sign;
		}
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};
// 重新设置支付密码
module.exports.post = function (req, res, next) {
	var params = {
		token: req.session.user.token,
		userName: req.session.user.username,
		code: req.body.code,
		passPwd: md5(req.body.passPwd),
		sign: req.session.sign,
		newPwd: md5(req.body.newPwd)
	};
	model.forgetPayPwd(params).then(function (rs) {
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};