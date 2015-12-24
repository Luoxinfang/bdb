var model = require('../../model/user.js');

//获取短信验证码
module.exports.get = function (req, res, next) {
	var number = req.query.number;
	var session = req.query.session;
	var param = {
		mobile: number,
		type: '00'
	};
	if (session) {
		if (req.session.user) {
			param.token = req.session.user.token;
		} else {
			res.json({
				status: 'redirect',
				msg: '请先登录',
				url: '/login'
			});
			return false;
		}
	}
	model.getSMS(param).then(function (data) {
		res.json(data);
	}).catch(function (error) {
		yog.log.fatal(error);
	});
};