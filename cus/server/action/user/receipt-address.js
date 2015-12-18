/**
 * @author chenzhenhua
 * @createTime 2015-12-15
 * @description 这个路由处理我的钱包首页
 */

var md5 = require('md5');
var _ = require('lodash');
var model = require('../../model/user.js');

// all
module.exports = function (req, res, next) {
	var resObj = req.appData;
	_.extend(resObj.header, {
		title :'收货地址',
		leftUrl: '/user/personal',
		rightText:'',
	})
	if(req.query.type == 'update'){
		res.render('cus/page/user/receipt-address.tpl',resObj);
		return;
	}
	resObj.header.rightText='删除';
	var params = _.extend({
		token: req.session.user.token
	},{addressid:req.query.addressId});
	//根据addressid获取收货地址信息
	model.listdetail(params).then(function (rs) {
		console.log(typeof rs.address);
			resObj.address =rs.address;
			res.render('cus/page/user/receipt-address.tpl',resObj);
	}).catch(function (error) {
		console.log(error);
		yog.log.fatal(error);
	});
};
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
		console.log(rs);
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};
