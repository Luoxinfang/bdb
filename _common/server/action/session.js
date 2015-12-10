/**
 * @author radish
 * @description 这个路由处理session 如登陆 退出等
 */

//var model = yog.require('_common/lib/loader-model.js')();

var _ = require('lodash');
var model = require('../model/session.js');
module.exports = function (req, res, next) {
	next();
};
//
module.exports.get = function (req, res, next) {
	//console.log(req.param('userName'));
	res.json({
		status: '0'
	});
};

//提交登录信息
module.exports.post = function (req, res, next) {
	var user = _.extend(req.body, {
		requestIP: req.ip
	});
	model.login(user).then(function (rs) {
		if (rs.status === '0') {
			//req.session.user = rs.data;
			//res.cookie('user_info', JSON.stringify(rs.data), {httpOnly: false});
		}
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};

module.exports.update = function () {

};

module.exports.put = function (req, res, next) {

};
//退出登录
module.exports.delete = function (req, res, next) {
	model.logout().then(function (rs) {

	});
};