/**
 * Created by chenzhenhua on 2015/12/15.
 * cash model
 */
var server = require('../lib/server.js');
var serverId = server.getServerId();
var cash = 'cash';
var bank = 'bank';
module.exports = {
	/**
	 * 查询是否设置支付密码
	 * @param token
	 * @returns recomplete:1已设置,0未设置
	 */
	queryPwd: function (params) {
		data = server.parserQuery(params, cash);
		return yog.ral(serverId, {
			method: 'GET',
			path: '/interface/cash/querypwd',
			query: data
		});
	},
	/**
	 * 查询账户余额
	 * @param token
	 * @returns cashmoney:现金余额,frozemoney:非现金余额
	 */
	queryCash: function (params) {
		data = server.parserQuery(params, cash);
		return yog.ral(serverId, {
			method: 'GET',
			path: '/interface/cash/query',
			query: data
		});
	},
	/**
	 * 设置支付密码
	 * @param {token,payPwd(支付密码),drawPwd(提款密码——预留)}
	 * @returns
	 */
	setPwd: function (params) {
		data = server.parserData(params, cash);
		return yog.ral(serverId, {
			path: '/interface/cash/setpwd',
			data: data
		});
	},
	/**
	 * 校验支付密码
	 * @param params
	 * @returns {*}
	 */
	validPwd: function (params) {
		data = server.parserQuery(params, cash);
		return yog.ral(serverId, {
			method: 'GET',
			path: '/interface/cash/validpwd',
			query: data
		});
	},
	/**
	 * 修改支付密码
	 * @param params
	 * @returns {*}
	 */
	updatePwd: function (params) {
		data = server.parserData(params, cash);
		return yog.ral(serverId, {
			path: '/interface/cash/updatepwd',
			data: data
		});
	},
	/**
	 * 银行卡列表查询
	 * @param params
	 * @returns
	 */
	queryBankList: function (params) {
		data = server.parserQuery(params, bank);
		return yog.ral(serverId, {
			method: 'GET',
			path: '/interface/cash/bank/list',
			query: data
		});
	},
	/**
	 * 设置默认银行卡
	 * @param {token,bankNo}
	 * @returns
	 */
	setDefaultBank: function (params) {
		data = server.parserData(params, bank);
		return yog.ral(serverId, {
			path: '/interface/cash/bank/setdefault',
			data: data
		});
	},
	/**
	 * 添加银行卡
	 * @param params
	 * @returns
	 */
	addBank: function (params) {
		data = server.parserData(params, bank);
		return yog.ral(serverId, {
			path: '/interface/cash/bank/add',
			data: data
		});
	},
	/**
	 * 删除银行卡
	 * @param params
	 * @returns
	 */
	deleteBank: function (params) {
		data = server.parserData(params, bank);
		return yog.ral(serverId, {
			path: '/interface/cash/bank/delete',
			data: data
		});
	},
	/**
	 * 账户相关操作前验证
	 * @param params
	 * @returns {*}
	 */
	opsAccount: function (params) {
		data = server.parserQuery(params, cash);
		return yog.ral(serverId, {
			method: 'GET',
			path: '/interface/cash/opsaccount',
			query: data
		});
	}
};