/**
 * @author pulang
 * @createTime 2015-12-16
 * @description 这个路由处理收货地址信息
 */

var md5 = require('md5');
var _ = require('lodash');
var model = require('../../model/user.js');

// all
module.exports = function (req, res, next) {
	var resObj = req.appData;
	resObj.header.title = '收货地址';
	resObj.header.leftUrl = '/user/personal';
	resObj.header.rightText = '';
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
			resObj.address =rs.address;
			res.render('cus/page/user/receipt-address.tpl',resObj);
	}).catch(function (error) {
		console.log(error);
		yog.log.fatal(error);
	});
};

