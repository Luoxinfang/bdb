/*user model*/

var server = require('../lib/server.js');
var serverId = server.getServerId();
module.exports = {
  //获取短信验证码
  getSMS: function (data) {
    data = server.parserData(data, 'sms');
    return yog.ral(serverId, {
      path: '/interface/sms/sendsms',
      data: data
    });
  },
  //注册
  register: function (data) {
    data = server.parserData(data, 'register');
    return yog.ral(serverId, {
      path: '/interface/reg/register',
      data: data
    });
  },
  //找回密码 第一步
  recovery1: function (data) {
    data = server.parserData(data, 'login');
    return yog.ral(serverId, {
      path: '/interface/login/validforgetpwd',
      data: data
    });
  },
  //找回密码 第二步
  recovery2: function (data) {
    data = server.parserData(data, 'login');
    return yog.ral(serverId, {
      path: '/interface/login/forgetpwd',
      data: data
    });
  },
	//找回支付密码前置校验
	validForgetPayPwd: function (data) {
		data = server.parserData(data, 'user');
		return yog.ral(serverId, {
			path: '/interface/user/validforgetpwd',
			data: data
		});
	},
	//找回支付密码
	forgetPayPwd: function (data) {
		data = server.parserData(data, 'user');
		return yog.ral(serverId, {
			path: '/interface/user/forgetpwd',
			data: data
		});
	}
};
