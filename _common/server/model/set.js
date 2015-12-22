/**
 * Created by pulang on 2015/12/22.
 * set model
 */
var server = require('../lib/server.js');
var serverId = server.getServerId();

module.exports = {
	/**
	 * 推送设置修改
	 * @param token
	 * @returns recomplete:1已设置,0未设置
	 */
	pushSet: function (params) {
		data = server.parserData(params, 'sys');
		return yog.ral(serverId, {
			path: '/interface/sys/disturbon',
			data: data
		});
	}

};