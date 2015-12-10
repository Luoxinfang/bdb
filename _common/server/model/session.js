/*session model*/

var server = require('../lib/server.js');
var serverId = 'BDB';


module.exports = {
	login: function (user) {
		user = server.parserData(user);
		return yog.ral(serverId, {
			path: '/interface/login/login2?'+user
		});
	},
	logout: function () {
		return yog.ral(serverId, {
			path: '/interface/login/logout'
		});
	}
};
