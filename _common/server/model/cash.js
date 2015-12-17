/**
 * Created by chenzhenhua on 2015/12/15.
 * cash model
 */
var server = require('../lib/server.js');
var serverId = server.getServerId();
var cash = 'cash';
var bank = 'bank'
module.exports = {
	/**
	 * 查询是否设置支付密码
	 * @param token
	 * @returns recomplete:1已设置,0未设置
	 */
	queryPwd: function (params) {
		data = server.parserData(params, cash);
		return yog.ral(serverId, {
			path: '/interface/cash/querypwd.shtml?' + data
		});
	},
	/**
	 * 查询账户余额
	 * @param token
	 * @returns cashmoney:现金余额,frozemoney:非现金余额
	 */
	queryCash: function (params) {
		data = server.parserData(params, cash);
		return yog.ral(serverId, {
			path: '/interface/cash/query.shtml?' + data
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
			path: '/interface/cash/setpwd.shtml?' + data
		});
	},
	/**
	 * 校验支付密码
	 * @param params
	 * @returns {*}
	 */
	validPwd: function (params) {
		data = server.parserData(params, cash);
		return yog.ral(serverId, {
			path: '/interface/cash/validpwd.shtml?' + data
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
			path: '/interface/cash/updatepwd.shtml?' + data
		});
	},
	/**
	 * 银行卡列表查询
	 * @param params
	 * @returns
	 */
	queryBankList: function (params) {
		data = server.parserData(params, bank);
		return yog.ral(serverId, {
			path: '/interface/cash/bank/list.shtml?' + data
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
			path: '/interface/cash/bank/setdefault.shtml?' + data
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
			path: '/interface/cash/bank/add.shtml?' + data
		});
	}
};