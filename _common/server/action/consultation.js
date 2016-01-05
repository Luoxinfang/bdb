/**
 * @author pulang
 * @createTime 2015-12-17
 * @description 这个路由处理店铺页面
 */

var md5 = require('md5');
var _ = require('lodash');
var model = require('../model/consultation.js');

//用户咨询
module.exports.post = function (req, res, next) {
	var params = _.extend({
		token: req.session.user.token,
		ip: '192.168.0.105'
	},req.body);
	model.consult(params).then(function (rs) {
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};