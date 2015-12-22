/**
 * @author pulang
 * @createTime 2015-12-22
 * @description 这个路由处理系统设置
 */

var _ = require('lodash');
var setModel = require('../../model/set.js');

//推送设置修改
module.exports.put = function (req, res, next) {
	var params = _.extend({
		token: req.session.user.token
	}, req.body);
	setModel.pushSet(params).then(function (rs) {
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};