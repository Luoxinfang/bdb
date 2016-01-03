/**
 * @author chenzhenhua
 * @createTime 2015-12-24
 * @description 这个路由处理忘记支付密码
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
	resObj.header.title = '忘记支付密码';
	resObj.header.leftUrl = '/wallet/paypwd/update';
	resObj.telphone = req.session.user.mobile;
	res.render('bus/page/wallet/paypwd/forget.tpl', resObj);
}