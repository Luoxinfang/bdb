/**
 * @author pulang
 * @createTime 2015-12-19
 * @description 这个路由处理系统消息加载
 */

var _ = require('lodash');
var model = yog.require('cus/model/user.js');

module.exports = function (req, res, next) {
	var resObj = req.appData;
	var page = {
		page:"1",
		pagesize:"20",
		status:0
	};
	var params = _.extend({
		token: req.session.user.token
	},page);
	//获取系统信息
	model.queryMsg(params).then(function (rs) {
		resObj.sysInfo = rs.data;
		res.render('cus/page/user/sys-message.tpl',resObj);
	}).catch(function (error) {
		console.log(error);
		yog.log.fatal(error);
	});
};