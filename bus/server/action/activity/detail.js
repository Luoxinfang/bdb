/**
 * @author pulang
 * @createTime 2015-12-25
 * @description 这个路由处理平台和店铺活动详情页面信息的加载
 */

var _ = require('lodash');
var model = require('../../model/activity.js');
var moment = require('moment');

module.exports = function (req, res, next) {
	var resObj = req.appData;
	resObj.header.title = req.query.activename;
	var params = _.extend({
		token: req.session.user.token
	}, {activityid:req.query.activityid});
	//查询平台和店铺活动信息
	model.getBdbDetail(params).then(function (rs) {
		resObj.detailInfo = rs.data;
		resObj.detailInfo.enrollovertime = moment(rs.data.enrollovertime).format('YYYY-MM-DD HH:mm:ss');
		resObj.detailInfo.starttime = moment(rs.data.starttime).format('YYYY-MM-DD HH:mm:ss');
		resObj.detailInfo.endtime = moment(rs.data.endtime).format('YYYY-MM-DD HH:mm:ss');
		res.render('bus/page/activity/detail.tpl', resObj);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};