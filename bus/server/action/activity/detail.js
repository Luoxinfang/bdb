/**
 * @author pulang
 * @createTime 2015-12-25
 * @description 这个路由处理平台活动详情页面信息的加载
 */

var _ = require('lodash');
var model = require('../../model/activity.js');

module.exports = function (req, res, next) {
	var resObj = req.appData;
	resObj.header.title = req.query.activename;
	var params = _.extend({
		token: req.session.user.token
	}, {activityid:"1"});
	//查询平台活动信息
	model.getBdbDetail(params).then(function (rs) {
		resObj.detailInfo = rs.data;
		res.render('bus/page/activity/detail.tpl', resObj);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};