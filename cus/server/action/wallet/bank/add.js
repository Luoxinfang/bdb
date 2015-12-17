/**
 * @author chenzhenhua
 * @createTime 2015-12-17
 * @description 这个路由处理银行卡增加页面
 */

var md5 = require('md5');
var _ = require('lodash');
var cashModel = yog.require('_common/model/cash.js');

//银行卡新增页面
module.exports = function (req, res, next) {
	var params = {
		token: req.session.user.token
	};
	var resObj = req.appData;
	resObj.header.title = '添加银行卡';
	resObj.validPayPwd = (+new Date() - req.session.validPayPwdTime) <= 10000;
	res.render('cus/page/wallet/bank/add.tpl', resObj);
	//cashModel.queryCash(params).then(function (rs) {
	//	res.render('cus/page/wallet/index.tpl', obj);
	//}).catch(function (error) {
	//	yog.log.fatal(error);
	//});
};