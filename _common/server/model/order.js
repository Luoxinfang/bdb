/**
 * @author chenzhenhua
 * @createTime 2015-12-25
 * @description 订单模块接口
 */

var server = require('../lib/server.js');
var serverId = server.getServerId();
var order = 'order';
module.exports = {
	/**
	 * 查询订单
	 * @param token
	 * @returns
	 */
	query: function (params) {
		data = server.parserQuery(params, order);
		return yog.ral(serverId, {
			method: 'GET',
			path: '/interface/order/query',
			query: data
		});
	},
	/**
	 * 查询订单详情
	 * @param params
	 * @returns {*}
	 */
	queryDetail: function (params) {
		data = server.parserQuery(params, order);
		return yog.ral(serverId, {
			method: 'GET',
			path: '/interface/order/detail/query',
			query: data
		});
	}
};