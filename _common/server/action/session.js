/**
 * @author radish
 * @description 这个路由处理session 如登陆 退出等
 */

var md5 = require('md5');
var _ = require('lodash');
var model = require('../model/session.js');


//提交登录信息
module.exports.post = function (req, res, next) {
	var type = req.hostname.split('.')[0];
	//user 0 用户 1商家
	var user = _.extend({
		requestIP: req.ip,
		type: 'cus' == type ? '0' : '1'
	}, req.body);
	user.pwd = md5(req.body.pwd);//传输给后台的密码需要加密
	model.login(user).then(function (rs) {
		if (rs.status == 0) {
			//返回登录前的url
			rs.referrer = req.session.login_referrer;
			req.session.user = rs.data;
			res.cookie('user_info', JSON.stringify(rs.data));
		}
		res.json(rs);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};
//切换账号
module.exports.put = function (req, res, next) {

};
//退出登录
module.exports.delete = function (req, res, next) {
	req.session.user = null;
	res.json({
		status: 0,
		msg: '已退出登录'
	});
};