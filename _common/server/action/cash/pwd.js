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
// get
module.exports.get = function (req, res, next) {

};
// put
module.exports.put = function (req, res, next) {
	var params = {
		token: req.session.user.token,
		payPwd: md5(req.body.payPwd),
		drawPwd: ''
	}
	cashModel.setPwd(params).then(function (rs) {
		console.log('>>>>>>>>>>设置支付密码----------\n', rs, '\n----------设置支付密码<<<<<<<<<<');
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};
// post
module.exports.post = function (req, res, next) {

};
// delet
module.exports.delete = function (req, res, next) {

};