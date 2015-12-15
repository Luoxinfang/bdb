/*session model*/

var server = require('../lib/server.js');
var serverId = server.getServerId();
var serviceName = 'index'
module.exports = {
	getData: function () {
		user = server.parserData(user, serviceName);
		return yog.ral(serverId, {
			path: '/interface/user/index?' + user
		});
	}
};
