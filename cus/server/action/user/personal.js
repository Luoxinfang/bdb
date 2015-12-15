/**
 * @description
 */

var _ = require('lodash');
var model = require('../../model/user.js');

module.exports = function (req, res, next) {
	var params = {
		token: '100101'
	};
	model.getData(params).then(function (data) {

		var resObj = {
			header: {
				title: '百多宝',       //header标题
				leftIcon: 'back',     //左侧默认返回按钮
				leftUrl: '/',         //左侧图标默认链接
				rightIcon: false,     //右侧单个图标
				rightUrl: false,      //右侧图标或文字链接
				rightIcons: false,    //右侧图标组
				rightText: false,     //右侧文字
				rightSort: false,     //右侧排序数组
				nav: ['系统消息', '用户消息'],     //头部nav数组
				tab: ['全部', '进行中', '未开始'],  //头部tab数组
				set: false
			},
			banner: [
				{imgUrl: 'http://img3.imgtn.bdimg.com/it/u=1703259431,1215286552&fm=15&gp=0.jpg'},
				{imgUrl: 'http://img3.imgtn.bdimg.com/it/u=1703259431,1215286552&fm=15&gp=0.jpg'},
				{imgUrl: 'http://img3.imgtn.bdimg.com/it/u=1703259431,1215286552&fm=15&gp=0.jpg'}
			]
		};
		resObj.header.title = '个人主页';
		resObj.banner = [{imgUrl: 'http://img0.imgtn.bdimg.com/it/u=1924553508,467785207&fm=21&gp=0.jpg'}];
		res.render('cus/page/user/personal-card.tpl', resObj);
	}).catch(function (error) {
		yog.log.fatal(error);
	});

};