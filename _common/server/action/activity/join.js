/**
 * @author pulang
 * @createTime 2015-12-25
 * @description 这个路由参加活动模块
 */

var _ = require('lodash');
var model = yog.require('bus/model/activity.js');

//报名参加活动
module.exports.post = function (req, res, next) {
	var params = _.extend({
		token: req.session.user.token
	}, {id:'1'});
	model.joinBdb(params).then(function (rs) {
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};