/**
 * @author pulang
 * @createTime 2015-12-16
 * @description 这个路由处理后端请求
 */

var server = yog.require('_common/lib/server.js');
var serverId = server.getServerId();
var service = 'register';

module.exports = {
	//获取用户个人信息
	apply: function (data) {
		var query = server.parserData(data, service);
		return yog.ral(serverId, {
			path: '/interface/reg/apply',
			data: query
		});
	},
	//查询用户地址信息
	queryList: function (data) {
		var query = server.parserQuery(data, 'address');
		return yog.ral(serverId, {
			method:'GET',
			path: '/interface/user/address/list',
			query: query
		});
	}

};