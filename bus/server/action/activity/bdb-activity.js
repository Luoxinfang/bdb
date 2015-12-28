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
	var status = req.query.status || '0';

	/*if(req.query.status=='1'){

		resObj.header.tab = [{val: '报名中',default:false,id:'registration'},{val: '已开始',default:true,id:'start'}];
	}else{
		resObj.header.tab = [{val: '报名中',default:true,id:'registration'},{val: '已开始',default:false,id:'start'}];
	}*/

	/*tab: {
	 cus: 'all',
	 list: [
	 {val: '全部', id: 'all'},
	 {val: '进行中', id: 'underway'},
	 {val: '未开始', id: 'notStart'}
	 ]
	 },*/  //头部tab数组*/
	var params = {
		token: req.session.user.token,
		status:status,
		page: req.query.page || 1,
		pageSize: req.query.pageSize || 6
	};
	//查询平台活动信息
	model.queryBdbActivity(params).then(function (rs) {
		if (0 == rs.status) {
			resObj.activityList = rs.data;
			if (req.query.type) {
				res.render('_common/widget/activity/activity-list.tpl', resObj);
			} else {
				res.render('bus/page/activity/bdb-activity.tpl', resObj);
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