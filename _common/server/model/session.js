/*session model*/

var server = require('../lib/server.js');
var serverId = server.getServerId();
var serviceName = 'login'
module.exports = {
	login: function (user) {
		user = server.parserData(user, serviceName);
		console.log(user);
		return yog.ral(serverId, {
			path: '/interface/login/login2?' + user
		});
	},
	logout: function () {
		return yog.ral(serverId, {
			path: '/interface/login/logout'
		});
	}
};
