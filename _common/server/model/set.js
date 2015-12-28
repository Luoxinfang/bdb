/**
 * Created by pulang on 2015/12/22.
 * set model
 */
var server = require('../lib/server.js');
var serverId = server.getServerId();

module.exports = {

	//推送设置修改
	pushSet: function (params) {
		data = server.parserData(params, 'sys');
		return yog.ral(serverId, {
			path: '/interface/sys/disturbon',
			data: data
		});
	},
	//提交投诉建议
	complainsuggest: function (params) {
		data = server.parserData(params, 'user');
		return yog.ral(serverId, {
			path: '/interface/user/complainsuggest',
			data: data
		});
	}


};