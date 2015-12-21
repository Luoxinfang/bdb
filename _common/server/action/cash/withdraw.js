/**
 * @author chenzhenhua
 * @createTime 2015-12-21
 * @description 这个路由处理提现
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
// 提现
module.exports.post = function (req, res, next) {
	var params = {
		token: req.session.user.token,
		sign: req.session.sign,
		money: req.body.money,
		bankNo: req.body.bankNo,
		sendFlag: req.body.sendFlag || 0,
		createTime: moment().format('YYYY-MM-DD HH:mm:ss')
	};
	cashModel.withdraw(params).then(function (rs) {
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};
// delet
module.exports.delete = function (req, res, next) {

};