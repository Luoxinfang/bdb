/*
 * app相关信息
 **/
module.exports = {
	//返回应用程序的信息
	getInfo: function () {
		return {
			title: '百多宝--珠宝电商平台',
			author: '百多宝前海科技有限公司',
			keyword: '百多宝,珠宝,电商平台',
			description: '百多宝--珠宝电商平台',
			copyright: 'Copyright&copy;2015 bdbvip.com All Rights Reserved'
		};
	},
	getHeader: function () {
		return {
			title: '百多宝',       //header标题
			leftIcon: 'back',     //左侧默认返回按钮
			leftUrl: false,         //左侧图标默认链接
			rightIcon: false,     //右侧单个图标
			rightUrl: false,      //右侧图标或文字链接
			rightIcons: false,    //右侧图标组
			rightText: false,     //右侧文字
			rightSort: false,     //右侧排序数组
			rightFilter: false,   //右侧筛选数组
			nav: [{val: '系统消息', url: '/user/sys-message', default: true},
				{val: '用户消息', url: '/user/user-message', default: false}],    //头部nav导航组件
			tab: {
				cus: 'all',
				list: [
					{val: '全部', id: 'all'},
					{val: '进行中', id: 'underway'},
					{val: '未开始', id: 'notStart'}
				]
			},  //头部tab数组
			settings: false
		};
	},
	//返回开发者信息
	getAuthor: function () {
		return '百多宝前端团队'
	}
};

