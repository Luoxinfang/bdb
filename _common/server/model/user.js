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
			path: '/interface/reg/register?' + data
		});
	},
	//退出
	logout: function () {
		return yog.ral(serverId, {
			path: '/interface/login/logout'
		});
	}
};
