/**
 * @author pulang
 * @createTime 2015-12-24
 * @description 这个路由处理店铺管理页面信息的加载
 */

var _ = require('lodash');
var model = require('../../model/store.js');

module.exports = function (req, res, next) {
	var resObj = req.appData;
	resObj.header.title = '店铺管理';
	var params = {
		token: req.session.user.token
	};
	//获取店铺基本信息
	model.getDetail(params).then(function (rs) {
		resObj.storeInfo = rs.data;
		console.log(rs);
		res.render('bus/page/store/manage.tpl', resObj);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};