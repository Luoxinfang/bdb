/**
 * @author pulang
 * @createTime 2015-12-25
 * @description 这个路由处理平台活动页面信息的加载
 */

var _ = require('lodash');
var model = require('../../model/activity.js');

module.exports = function (req, res, next) {
	var resObj = req.appData;
	resObj.header.title = '平台活动';
	resObj.header.tab = [{val: '报名中',default:true,id:'registration'},{val: '已开始',default:false,id:'start'}];

	var params = _.extend({
		token: req.session.user.token
	}, {status:'0',page:'1',pagesize:'20'});
	//查询平台活动信息
	model.queryBdbActivity(params).then(function (rs) {
		resObj.activityList = rs.data;
		res.render('bus/page/activity/bdb-activity.tpl', resObj);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};