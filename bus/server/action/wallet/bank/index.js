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
		token: req.session.user.token,
		pageSize: req.body.pageSize || 10,
		page: req.body.page || 1
	};
	var resObj = req.appData;
	resObj.header.title = '银行卡管理';
	resObj.header.rightText = '删除';
	cashModel.queryBankList(params).then(function (rs) {
		if (0 == rs.status) {
			resObj.bankList = rs.list;
			res.render('bus/page/wallet/bank/index.tpl', resObj);
		} else {
			resObj.rs = {};
			resObj.rs.status = rs.status;
			resObj.rs.msg = rs.msg || '服务器异常，请稍后再试';
			res.render('_common/page/error.tpl', resObj);
		}
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};