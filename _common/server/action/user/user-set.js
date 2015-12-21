/**
 * @author pulang
 * @createTime 2015-12-19
 * @description 这个路由处理用户设置的信息
 */

var _ = require('lodash');
var model = yog.require('cus/model/user.js');

//用户设置托管竞价
module.exports.post = function (req, res, next) {
	var params = _.extend({
		token: req.session.user.token
	}, req.body);
	model.setHostingBid(params).then(function (rs) {
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};