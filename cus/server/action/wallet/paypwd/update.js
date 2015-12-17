/**
 * @author chenzhenhua
 * @createTime 2015-12-16
 * @description 这个路由处理修改支付密码
 */

var md5 = require('md5');
var _ = require('lodash');
var cashModel = yog.require('_common/model/cash.js');

// all
module.exports = function (req, res, next) {
	var params = {
		token: req.session.user.token
	};
	var resObj = req.appData;
	resObj.header.title = '修改支付密码';
	resObj.validPayPwd = (+new Date() - req.session.validPayPwdTime) <= 10000;
	res.render('cus/page/wallet/paypwd/update.tpl', resObj);
};
// get
module.exports.get = function (req, res, next) {

};
// post
module.exports.post = function (req, res, next) {

};
// put
module.exports.put = function (req, res, next) {

};
// delet
module.exports.delete = function (req, res, next) {

};