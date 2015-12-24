/**
 * @author chenzhenhua
 * @createTime 2015-12-23
 * @description 这个路由处理交易详情
 */

var md5 = require('md5');
var _ = require('lodash');
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
// post
module.exports.post = function (req, res, next) {
	var params = {
		token: req.session.user.token,
		tradeNo: req.body.tradeNo
	};
	cashModel.transDetail(params).then(function (rs) {
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};
// delet
module.exports.delete = function (req, res, next) {

};