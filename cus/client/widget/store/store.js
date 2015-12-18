/**
 * @description pulang 2015/12/16
 */

var _ = require('lodash');
var model = yog.require('cus/model/user.js');

module.exports = function (req, res, next) {
	var resObj = req.appData;
	var page = {
		Page:1,
		Pagesize:2
	};
	var params1 = {
		token: req.session.user.token
	};
	var params2 = _.extend({
		token: req.session.user.token
	},page);
	//获取用户基本信息
	model.getData(params1).then(function (rs) {
		resObj.userInfo = rs.data;
		if(null != rs.data.othercount){
			resObj.userInfo.counttype = rs.data.othercount.substring(0,2);
		}
		//查询收货地址列表信息
		model.queryList(params2).then(function (rs) {
			resObj.addressInfo = rs.list;
			res.render('cus/page/user/personal.tpl',resObj);
		}).catch(function (error) {
			console.log(error);
			yog.log.fatal(error);
		});
	}).catch(function (error) {
		console.log(error);
		yog.log.fatal(error);
	});
};