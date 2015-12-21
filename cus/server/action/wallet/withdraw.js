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
	res.render('cus/page/wallet/withdraw.tpl', resObj);
};