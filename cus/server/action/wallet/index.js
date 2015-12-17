/**
 * @author chenzhenhua
 * @createTime 2015-12-15
 * @description 这个路由处理我的钱包首页
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
	resObj.header.title = '我的钱包';
	resObj.payPwdRecomplete = 1;
	resObj.cashMoney = 0;
	cashModel.queryCash(params).then(function (rs) {
		if (0 == rs.status) {
			resObj.cashMoney = rs.cashmoney;
			if (resObj.cashMoney > 0) {
				res.render('cus/page/wallet/index.tpl', resObj);
			} else {
				cashModel.queryPwd(params).then(function (rs) {
					resObj.payPwdRecomplete = rs.recomplete;
					res.render('cus/page/wallet/index.tpl', resObj);
				}).catch(function (error) {
					yog.log.fatal(error);
				});
			}
		} else {
			resObj.rs = {};
			resObj.rs.status = rs.status;
			resObj.rs.msg = rs.msg || '服务器异常，请稍后再试';
			res.render('cus/page/wallet/result.tpl', resObj);
		}
	}).catch(function (error) {
		yog.log.fatal(error);
	});
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