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
		sign: req.session.sign,
		bankCode: req.body.bankCode || '',
		bankName: req.body.bankName || '',
		bankNo: req.body.bankNo,
		realName: encodeURIComponent(req.body.realName),
		provider: req.body.provider || '',
		city: req.body.city || '',
		openAddress: req.body.openAddress,
		flag: req.body.flag || 0
	}
	bankModel.addBank(params).then(function (rs) {
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};
// 修改银行卡
module.exports.post = function (req, res, next) {
	var params = {
		token: req.session.user.token,
		sign: req.session.sign,
		bankCode: req.body.bankCode || '',
		bankName: req.body.bankName || '',
		bankNo: req.body.bankNo,
		realName: req.body.realName,
		provider: req.body.provider || '',
		city: req.body.city || '',
		openAddress: req.body.openAddress,
		flag: req.body.flag || 0
	}
	bankModel.addBank(params).then(function (rs) {
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};
// 删除银行卡
module.exports.delete = function (req, res, next) {

};