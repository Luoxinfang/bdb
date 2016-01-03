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
		bankCode: req.body.bankCode || 'null',
		bankName: req.body.bankName || 'null',
		bankNo: req.body.bankNo,
		realName: req.body.realName,
		provider: req.body.provider || 'null',
		city: req.body.city || 'null',
		openAddress: req.body.openAddress,
		flag: req.body.flag || '0'
	}
	bankModel.addBank(params).then(function (rs) {
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};
// 修改银行卡
module.exports.post = function (req, res, next) {

};
// 删除银行卡
module.exports.delete = function (req, res, next) {
	var params = {
		token: req.session.user.token,
		sign: req.session.sign,
		bankNo: req.body.bankNo
	}
	bankModel.deleteBank(params).then(function (rs) {
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};