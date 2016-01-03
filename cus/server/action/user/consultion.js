/**
 * @author pulang
 * @createTime 2016-1-3
 * @description 这个处理用户咨询模块
 */

var _ = require('lodash');
var model = require('../../model/user.js')

//报名参加活动
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