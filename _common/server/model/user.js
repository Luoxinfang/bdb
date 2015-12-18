/*user model*/

var server = require('../lib/server.js');
var serverId = server.getServerId();
var serviceName = 'login'
module.exports = {
	//登录
	login: function (user) {
		user = server.parserData(user, serviceName);
		return yog.ral(serverId, {
			path: '/interface/login/login2?' + user
		});
	},
	//获取短信验证码
	getSMS: function (data) {
		data = server.parserData(data, 'sms');
		return yog.ral(serverId, {
			path: '/interface/sms/sendsms?' + data
		});
	},
	//退出
	logout: function () {
		return yog.ral(serverId, {
			path: '/interface/login/logout'
		});
	}
};
