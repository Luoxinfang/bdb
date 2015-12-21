/**
 * @author pulang
 * @createTime 2015-12-19
 * @description 这个路由处理用户信息的加载
 */

var _ = require('lodash');
var model = yog.require('cus/model/user.js');

module.exports = function (req, res, next) {
	var resObj = req.appData;
	resObj.header.nav = [{val:'系统消息',url:'/user/sys-message',default:false},
		{val:'用户消息',url:'/user/user-message',default:true}];
	var page = {
		Page: 1,
		Pagesize: 20,
		Status: 0
	};
	var params = _.extend({
		token: req.session.user.token
	}, page);
	//获取系统信息
	model.queryDetail(params).then(function (rs) {
		console.log(rs);
		resObj.userInfo = rs.data;
		res.render('cus/page/user/user-message.tpl', resObj);
	}).catch(function (error) {
		console.log(error);
		yog.log.fatal(error);
	});
};