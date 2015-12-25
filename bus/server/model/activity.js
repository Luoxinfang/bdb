/**
 * @author pulang
 * @createTime 2015-12-25
 * @description 这个处理活动请求
 */

var server = yog.require('_common/lib/server.js');
var serverId = server.getServerId();
var service = 'activity';

module.exports = {
	//查询平台的活动
	queryBdbActivity: function (data) {
		var query = server.parserQuery(data, service);
		return yog.ral(serverId, {
			method:'GET',
			path: '/interface/activity/query',
			query: query
		});
	},
	//获取平台活动详情
	getBdbDetail: function (data) {
		var query = server.parserQuery(data, service);
		return yog.ral(serverId, {
			method:'GET',
			path: '/interface/activity/detail',
			query: query
		});
	},
	//参加平台活动
	joinBdb: function (data) {
		var query = server.parserData(data, service);
		return yog.ral(serverId, {
			path: '/interface/activity/join',
			data: query
		});
	},
	//查询店铺的活动
	queryShopActivity: function (data) {
		var query = server.parserQuery(data, service);
		return yog.ral(serverId, {
			method:'GET',
			path: '/interface/shop/activity/query',
			query: query
		});
	},
	//获取店铺活动详情
	getShopDetail: function (data) {
		var query = server.parserQuery(data, service);
		return yog.ral(serverId, {
			method:'GET',
			path: '/interface/activity/detail',
			query: query
		});
	},
	//参加店铺活动
	joinBdb: function (data) {
		var query = server.parserData(data, service);
		return yog.ral(serverId, {
			path: '/interface/activity/join',
			data: query
		});
	},

};