/**
 * @author chenzhenhua
 * @createTime 2015-12-17
 * @description 这个路由处理银行卡页面
 */

var md5 = require('md5');
var _ = require('lodash');
var cashModel = yog.require('_common/model/cash.js');

//银行卡首页
module.exports = function (req, res, next) {
	var params = {
		token: req.session.user.token
	};
	var resObj = req.appData;
	resObj.header.title = '银行卡管理';
	resObj.header.rightText = '删除';
	res.render('cus/page/wallet/bank/index.tpl', resObj);
	//cashModel.queryCash(params).then(function (rs) {
	//	res.render('cus/page/wallet/index.tpl', obj);
	//}).catch(function (error) {
	//	yog.log.fatal(error);
	//});
};