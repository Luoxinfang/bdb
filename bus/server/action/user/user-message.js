/**
 * @author pulang
 * @createTime 2015-12-19
 * @description 这个路由处理用户信息的加载
 */

var _ = require('lodash');
var model = yog.require('_common/model/consultation.js');
var moment = require('moment');

module.exports = function (req, res, next) {
	var resObj = req.appData;
	resObj.header.title = '客服中心';
	var param = {
		token: req.session.user.token
	};
	//获取用户信息列表
	model.recentconsult(param).then(function (rs) {
		resObj.userMsg = rs.data;
		res.render('bus/page/user/user-message.tpl', resObj);
	}).catch(function (error) {
		console.log(error);
		yog.log.fatal(error);
	});
};