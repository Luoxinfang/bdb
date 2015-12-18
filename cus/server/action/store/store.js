/**
 * @author pulang
 * @createTime 2015-12-17
 * @description 这个路由处理店铺页面
 */

var md5 = require('md5');
var _ = require('lodash');
var model = require('../../model/user.js');

// all
module.exports.put = function (req, res, next) {
	var params = _.extend({
		token: req.session.user.token
	}, req.body);
	model.attention(params).then(function (rs) {
		console.log(rs);
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};
