/**
 * @author pulang
 * @createTime 2015-12-25
 * @description 这个路由处理店铺活动页面信息的加载
 */

var _ = require('lodash');
var model = require('../../model/activity.js');

module.exports = function (req, res, next) {
	var resObj = req.appData;
	resObj.header.title = '店铺活动';
	var status = req.query.status || '1';
	if(req.query.status=='2'){
		resObj.header.tab = {
			cur: 'introduced',
			list: [
				{val: '已开始', id: 'start'},
				{val: '未开始', id: 'notStart'},
				{val: '已结束', id: 'introduced'}
			]
		};
	}else if(req.query.status=='0'){
		resObj.header.tab = {
			cur: 'notStart',
			list: [
				{val: '已开始', id: 'start'},
				{val: '未开始', id: 'notStart'},
				{val: '已结束', id: 'introduced'}
			]
		};
	}else {
		resObj.header.tab = {
			cur: 'start',
			list: [
				{val: '已开始', id: 'start'},
				{val: '未开始', id: 'notStart'},
				{val: '已结束', id: 'introduced'}
			]
		};
	}
	var params = {
		token: req.session.user.token,
		status:status,
		page: req.query.page || 1,
		pageSize: req.query.pageSize || 6
	};
	//查询店铺活动信息
	model.queryShopActivity(params).then(function (rs) {
		if (0 == rs.status) {
			resObj.activityList = rs.data;
			if (req.query.type) {
				res.render('_common/widget/activity/activity-list.tpl', resObj);
			} else {
				res.render('bus/page/activity/store-activity.tpl', resObj);
			}
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