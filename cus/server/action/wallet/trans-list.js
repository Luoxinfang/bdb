/**
 * @author chenzhenhua
 * @createTime 2015-12-22
 * @description 这个路由处理我的钱包下交易记录页面
 */
var md5 = require('md5');
var _ = require('lodash');
var moment = require('moment');
var cashModel = yog.require('_common/model/cash.js');
var transType = {
	'6001': '充值',
	'7001': '提现',
	'7002': '打赏（支出）',
	'6002': '打赏（收入）',
	'6003': '商品交易（收入）',
	'7003': '商品交易（支出）',
	'6004': '退款（收入）',
	'7004': '退款（支出）',
	'7005': '支付保证金（支出）',
	'6005': '支付保证金（收入）',
	'7015': '返还保证金（支出）'
};
// all
module.exports = function (req, res, next) {
	var params = {
		token: req.session.user.token,
		page: req.query.page || 1,
		pageSize: req.query.pageSize || 8,
		bTime: req.query.bTime || moment({hour: 0, minute: 0, seconds: 0}).subtract(moment.duration(7, 'd')).format('YYYY-MM-DD HH:mm:ss'),
		eTime: req.query.eTime || moment({hour: 23, minute: 59, seconds: 59}).format('YYYY-MM-DD HH:mm:ss'),
		userName: req.query.userName,
		tradeType: req.query.tradeType
	};
	var resObj = req.appData;
	resObj.header.title = '交易明细';
	resObj.header.rightFilter = {
		text: '筛选',
		filters: [
			{text: '打赏',val:'6002'},
			{text: '充值',val:'6001'},
			/*{text: '支付'},
			{text: '货款'},
			{text: '退款'},*/
			{text: '提现',val:'7001'}
		]
	};
	cashModel.transList(params).then(function (rs) {
		if (0 == rs.status) {
			resObj.transList = rs.data;
			resObj.transType = transType;
			if (req.query.bTime) {
				resObj.bTime = req.query.bTime.substr(0, 10);
			} else {
				resObj.bTime = req.query.bTime || moment().subtract(moment.duration(7, 'd')).format('YYYY-MM-DD');
			}
			if (req.query.eTime) {
				resObj.eTime = req.query.eTime.substr(0, 10);
			} else {
				resObj.eTime = req.query.eTime || moment().format('YYYY-MM-DD');
			}
			res.render('cus/page/wallet/trans-list.tpl', resObj);
		} else {
			resObj.rs = {};
			resObj.rs.status = rs.status;
			resObj.rs.msg = rs.msg || '服务器异常，请稍后再试';
			res.render('_common/page/error.tpl', resObj);
		}
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};