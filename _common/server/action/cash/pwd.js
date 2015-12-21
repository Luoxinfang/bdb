/**
 * @author chenzhenhua
 * @createTime 2015-12-15
 * @description 这个路由处理我的钱包首页
 */

var md5 = require('md5');
var _ = require('lodash');
var cashModel = require('../../model/cash.js');

// all
module.exports = function (req, res, next) {
	next();
};
// 验证支付密码
module.exports.get = function (req, res, next) {
	var params = {
		token: req.session.user.token,
		payPwd: md5(req.query.payPwd),
		drawPwd: ''
	}
	cashModel.validPwd(params).then(function (rs) {
		if (0 == rs.status) {
			req.session.oldPayPwd = req.query.payPwd;
			req.session.validPayPwdTime = +new Date();
		}
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};
// 设置支付密码
module.exports.put = function (req, res, next) {
	var params = {
		token: req.session.user.token,
		payPwd: md5(req.body.payPwd),
		drawPwd: ''
	}
	cashModel.setPwd(params).then(function (rs) {
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};
// 修改支付密码
module.exports.post = function (req, res, next) {
	var params = {
		token: req.session.user.token,
		oldPayPwd: md5(req.session.oldPayPwd),
		payPwd: md5(req.body.payPwd),
		oldDrawPwd: '',
		drawPwd: ''
	};
	cashModel.updatePwd(params).then(function (rs) {
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};
// delet
module.exports.delete = function (req, res, next) {

};