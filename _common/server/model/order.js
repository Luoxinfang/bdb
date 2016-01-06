/**
 * @author chenzhenhua
 * @createTime 2015-12-25
 * @description 订单模块接口
 */

var server = yog.require('_common/lib/server.js');
;
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
	},
	/**
	 * 零钱支付订单
	 * @param params
	 * @returns {*}
	 */
	payByWallet: function (params) {
		data = server.parserData(params, order);
		return yog.ral(serverId, {
			path: '/interface/order/paymoney',
			data: data
		});
	},
	/**
	 * 提醒发货
	 * @param params
	 * @returns {*}
	 */
	remindDeliver: function (params) {
		data = server.parserData(params, order);
		return yog.ral(serverId, {
			path: '/interface/order/remind',
			data: data
		});
	},
	/**
	 * 延时收货
	 * @param params
	 * @returns {*}
	 */
	delayReceive: function (params) {
		data = server.parserData(params, order);
		return yog.ral(serverId, {
			path: '/interface/order/orddelay',
			data: data
		});
	},
	/**
	 * 确认收货
	 * @param params
	 * @returns {*}
	 */
	confirmReceive: function (params) {
		data = server.parserData(params, order);
		return yog.ral(serverId, {
			path: '/interface/order/ordreceive',
			data: data
		});
	},
	/**
	 * 订单评价
	 * @param params
	 * @returns {*}
	 */
	comment: function (params) {
		data = server.parserData(params, order);
		return yog.ral(serverId, {
			path: '/interface/order/evaluate',
			data: data
		});
	},
	/**
	 * 订单投诉
	 * @param params
	 * @returns {*}
	 */
	complain: function (params) {
		data = server.parserData(params, order);
		return yog.ral(serverId, {
			path: '/interface/order/applybdb',
			data: data
		});
	}
};