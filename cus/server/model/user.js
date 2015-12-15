/*session model*/

var server = require('../lib/server.js');
var serverId = server.getServerId();
var serviceName = 'index'
module.exports = {
	getData: function (data) {
		var query = server.parserData(data, serviceName);
		console.log('query:/interface/user/index?',query);
		return yog.ral(serverId, {
			path: '/interface/user/index?' + query
		});
	}
};
