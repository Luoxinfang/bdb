/**
 * @author pulang
 * @createTime 2015-12-25
 * @description 这个处理更换手机号的请求
 */

var _ = require('lodash');
var md5 = require('md5');
var model = yog.require('cus/model/user.js');

//用户修改手机号
module.exports.put = function (req, res, next) {
	var params = _.extend({
		token: req.session.user.token
	}, req.body);
	params.passwd = md5(params.passwd);
	model.changePhone(params).then(function (rs) {
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};