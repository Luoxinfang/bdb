/**
 * @author chenzhenhua
 * @createTime 2015-12-15
 * @description 这个路由处理我的钱包首页
 */

var md5 = require('md5');
var _ = require('lodash');
var model = require('../../model/user.js');

// all
module.exports.post = function (req, res, next) {
	var params = _.extend({
		token: req.session.user.token
	}, req.body);
	model.addAddress(params).then(function (rs) {
		console.log(rs);
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};
