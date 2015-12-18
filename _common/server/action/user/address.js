/**
 * @author pulang
 * @createTime 2015-12-18
 * @description 这个路由处理地址信息的请求
 */

var _ = require('lodash');
var model = yog.require('cus/model/user.js');

//保存收货地址信息
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
//删除收货地址信息
module.exports.delete = function (req, res, next) {
	var params = _.extend({
		token: req.session.user.token
	}, req.body);
	model.deleteData(params).then(function (rs) {
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};
//设置默认收货地址
module.exports.put = function (req, res, next) {
	var params = _.extend({
		token: req.session.user.token
	}, req.body);
	model.setdefault(params).then(function (rs) {
		console.log(rs);
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};