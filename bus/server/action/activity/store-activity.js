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
		resObj.header.tab = [{val: '已开始',default:false,id:'start'},{val: '未开始',default:false,id:'notStart'},{val: '已结束',default:true,id:'introduced'}];
	}else if(req.query.status=='0') {
		resObj.header.tab = [{val: '已开始',default:false,id:'start'},{val: '未开始',default:true,id:'notStart'},{val: '已结束',default:false,id:'introduced'}];
	}else {
		resObj.header.tab = [{val: '已开始',default:true,id:'start'},{val: '未开始',default:false,id:'notStart'},{val: '已结束',default:false,id:'introduced'}];
	}
	var params = _.extend({
		token: req.session.user.token
	}, {status:status,page:'1',pagesize:'4'});
	//查询店铺活动信息
	model.queryShopActivity(params).then(function (rs) {
		resObj.activityList = rs.data;
		res.render('bus/page/activity/store-activity.tpl', resObj);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};