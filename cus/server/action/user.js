//var model = yog.require('_common/lib/loader-model.js')();

/**
 * @author radish
 * @description 这个路由处理session 如登陆 退出等
 */

var md5 = require('md5');
var _ = require('lodash');
var model = require('../model/user.js');
module.exports = function (req, res, next) {
	console.log(11111);
	next();
};
//
/*module.exports.get = function (req, res, next) {
	//console.log(req.param('userName'));
	res.json({
		status: '0'
	});
};*/


//个人主页
module.exports.get('/personal-card', function (req, res, next) {
	var obj = _.cloneDeep(resObj);
	obj.header.title = '个人主页';
	obj.banner = [{imgUrl: 'http://img0.imgtn.bdimg.com/it/u=1924553508,467785207&fm=21&gp=0.jpg'}];
	res.render('cus/page/user/personal-card.tpl', obj);
});

//提交登录信息
module.exports.get = function (req, res, next) {
	var user = _.extend({
		requestIP: req.ip
	}, req.body);

	/*model.query(user);*/


	/*user.pwd = md5(req.body.pwd);*/
	model.getData(user).then(function (rs) {
		if (rs.status == 0) {
			req.session.user = rs.data;
			if (req.body.remember == 'true') {
				rs.data.pwd = req.body.pwd;
			}
			res.cookie('user_info', JSON.stringify(rs.data));
		}

	}).catch(function (error) {
		yog.log.fatal(error);
	});
};

module.exports.put = function (req, res, next) {

};
//退出登录
module.exports.delete = function (req, res, next) {
	model.logout().then(function (rs) {

	});
};