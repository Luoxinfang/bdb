/**
 * @author pulang
 * @createTime 2015-12-23
 * @description 这个路由处理商家店铺模块
 */

var md5 = require('md5');
var _ = require('lodash');
var model = require('../../model/store.js');

module.exports.post = function (req, res, next) {
	var params = _.extend({
		token: req.session.user.token
	}, req.body);
	model.apply(params).then(function (rs) {
		console.log(rs);
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};
