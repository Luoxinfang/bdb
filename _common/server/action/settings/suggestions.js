/**
 * @author pulang
 * @createTime 2015-12-28
 * @description 这个路由处理提交投诉建议
 */

var _ = require('lodash');
var model = require('../../model/set.js');

//提交投诉建议
module.exports.post = function (req, res, next) {
	var params = _.extend({
		token: req.session.user.token
	}, req.body);
	model.complainsuggest(params).then(function (rs) {
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};