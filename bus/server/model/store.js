/**
 * @author pulang
 * @createTime 2015-12-16
 * @description 这个路由处理后端请求
 */

var server = yog.require('_common/lib/server.js');
var serverId = server.getServerId();
var service = 'shop';

module.exports = {
	//获取店铺详细信息
	getDetail: function (data) {
		var query = server.parserQuery(data, service);
		return yog.ral(serverId, {
			method:'GET',
			path: '/interface/shop/detail',
			query: query
		});
	},
	//更新店铺信息
	updateInfo: function (data) {
		var query = server.parserData(data, service);
		return yog.ral(serverId, {
			path: '/interface/shop/update',
			data: query
		});
	}

};