/**
 * Created by chenzhenhua on 2015/12/17.
 * 银行卡路由
 */

var md5 = require('md5');
var _ = require('lodash');
var bankModel = require('../../model/cash.js');

// all
module.exports = function (req, res, next) {
	next();
};
// get
module.exports.get = function (req, res, next) {

};
// 新增银行卡
module.exports.put = function (req, res, next) {
	var params = {
		token: req.session.user.token,
		payPwd: md5(req.body.payPwd),
		drawPwd: ''
	}
	bankModel.setPwd(params).then(function (rs) {
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
	bankModel.updatePwd(params).then(function (rs) {
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};
// delet
module.exports.delete = function (req, res, next) {

};