/*session model*/

var server = yog.require('_common/lib/server.js');
var serverId = server.getServerId();
var serviceName = 'index'
module.exports = {
	getData: function (data) {
		var query = server.parserData(data, serviceName);
		return yog.ral(serverId, [{
			path: '/interface/user/index?' + query
		}]);
	}
};
