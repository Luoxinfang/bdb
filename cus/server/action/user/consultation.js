/**
 * @author pulang
 * @createTime 2016-1-3
 * @description 这个处理用户咨询模块
 */
var _ = require('lodash');
var model = yog.require('_common/model/consultation.js');
var moment = require('moment');

module.exports = function (req, res, next) {
	var resObj = req.appData;
	resObj.header.title = '与'+req.query.shopname+'对话中';
	resObj.userid = req.query.userid;
	resObj.nowDate = moment({hour: 0,minute: 0,seconds: 0})+0;
	var params = {
		token: req.session.user.token,
		page:req.query.page || '1',
		pagesize:req.query.pageSize || '10',
		shopid:req.query.shopid
	};
	//获取聊天列表
	model.consultDetail(params).then(function (rs) {
		if (0 == rs.status) {
			if(typeof rs.data != 'undefined'){
				resObj.consultInfo = _.sortByOrder(rs.data,['createtime'], ['asc']);
				if (req.query.type) {
					res.render('_common/  widget/user/consult-list.tpl', resObj);
				} else {
					resObj.total = rs.total;
					res.render('cus/page/user/consultation.tpl', resObj);
				}
			}
		} else {
			resObj.rs = {};
			resObj.rs.status = rs.status;
			resObj.rs.msg = rs.msg || '服务器异常，请稍后再试';
			res.render('_common/page/error.tpl', resObj);
		}
	}).catch(function (error) {
		console.log(error);
		yog.log.fatal(error);
	});
};
