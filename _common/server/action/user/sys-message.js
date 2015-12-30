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
		pagesize:"4",
		status:0
	};
	var params = _.extend({
		token: req.session.user.token
	},page);
	//获取系统信息
	model.queryMsg(params).then(function (rs) {
		if (0 == rs.status) {
			resObj.sysInfo = rs.data;
			if (req.query.type) {
				res.render('_common/widget/user/sysMessage-list.tpl', resObj);
			} else {
				res.render('cus/page/user/sys-message.tpl',resObj);
			}
		} else {
			resObj.rs = {};
			resObj.rs.status = rs.status;
			resObj.rs.msg = rs.msg || '服务器异常，请稍后再试';
			res.render('_common/page/error.tpl', resObj);
		}
	}).catch(function (error) {
		console.log(error);
		yog.log.fatal(error);
	});
};