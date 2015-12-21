/**
 * @author chenzhenhua
 * @createTime 2015-12-19
 * @description 这个路由处理我的钱包下提现页面
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
	resObj.header.title = '提现';
	cashModel.queryBankList(_.extend({
		pageSize: req.body.pageSize || 10,
		page: req.body.page || 1
	}, params)).then(function (rs) {
		console.log('>>>>>>>>>>----------', rs, '----------<<<<<<<<<<');
		if (0 == rs.status) {
			resObj.bankList = rs.list;
			res.render('cus/page/wallet/withdraw.tpl', resObj);
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