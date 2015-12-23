/**
 * @author chenzhenhua
 * @createTime 2015-12-22
 * @description 这个路由处理充值
 */

var md5 = require('md5');
var _ = require('lodash');
var moment = require('moment');
var cashModel = require('../../model/cash.js');

// all
module.exports = function (req, res, next) {
	next();
};
// get
module.exports.get = function (req, res, next) {

};
// put
module.exports.put = function (req, res, next) {

};
// 充值
module.exports.post = function (req, res, next) {
	var params = {
		token: req.session.user.token,
		money: req.body.money,
		type: req.body.type || 1,
		code: req.body.code || '网银',
		couponNo: req.body.couponNo || ''
	};
	cashModel.recharge(params).then(function (rs) {
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};
// delet
module.exports.delete = function (req, res, next) {

};