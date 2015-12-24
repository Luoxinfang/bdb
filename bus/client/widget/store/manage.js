/**
 * @author pulang
 * @createTime 2015-12-23
 * @description 这个路由处理用户申请开店
 */
var B = require('_common:js/bdb/core.js');

module.exports = {
	init: function () {
		this.event();
	},
	//提交申请开店的资料
	applyStore: function () {

		$.ajax({
			type: 'post',
			dataType: 'json',
			url: '/store/store',
			data: {
				shopname:'爱的',
				realname:'小明',
				cardimg:'55',
				telephone:'1111',
				kindscode:'1',
				agree:'1'
			},
			success: function (data) {
				if (0 == data.status) {
				} else {
					var msg = data.msg || '服务器异常，请稍后再试';
					B.topWarn(msg);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				B.topWarn('服务器异常，请稍后再试');
			}
		});
	},
	event: function () {
		$(".footer").on('click', "#form-submit", this.applyStore.bind(this));
	}
};
