/*
 * wallet model
 */

var server = yog.require('_common/lib/server.js');
var serverId = server.getServerId();

module.exports = {
	queryPwd: function (params) {
		data = server.parserData(params, 'cash');
		return yog.ral(serverId, {
			path: '/interface/cash/querypwd.shtml?' + data
		});
	},
	queryCash: function (params) {
		data = server.parserData(params, 'cash');
		return yog.ral(serverId, {
			path: '/interface/cash/query.shtml?' + data
		});
	}
};
