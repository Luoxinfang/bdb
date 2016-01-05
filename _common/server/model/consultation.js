/**
 * Created by pulang on 2016/1/4.
 * consultion model
 */
var server = require('../lib/server.js');
var serverId = server.getServerId();

module.exports = {
	/**
	 * 用户和商家的聊天记录
	 * @param token
	 * @returns
	 */
	consultDetail: function (params) {
		data = server.parserQuery(params, 'user');
		return yog.ral(serverId, {
			method: 'GET',
			path: '/interface/user/consultdetail',
			query: data
		});
	},
	//用户最新咨询列表
	recentconsult: function (data) {
		var query = server.parserQuery(data, 'user');
		return yog.ral(serverId, {
			method:'GET',
			path: '/interface/user/recentconsult',
			query: query
		});
	},
	//用户咨询
	consult: function (data) {
		var query = server.parserData(data, 'user');
		return yog.ral(serverId, {
			path: '/interface/user/consult',
			data: query
		});
	}
};