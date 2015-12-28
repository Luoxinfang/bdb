/**
 * @author pulang
 * @createTime 2015-12-25
 * @description 这个路由参加活动模块
 */

var _ = require('lodash');
var model = yog.require('bus/model/activity.js');

//新增店铺活动
module.exports.post = function (req, res, next) {
	var params = _.extend({
		token: req.session.user.token
	}, req.body);
	model.addStoreActivity(params).then(function (rs) {
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};