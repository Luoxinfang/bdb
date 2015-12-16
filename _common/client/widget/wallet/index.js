/**
 * Created by chenzhenhua on 2015/12/15.
 */

var B = require('_common:js/bdb/core.js');

module.exports = {
	init: function () {
		this.event();
	},
	setCashPwd: function () {
		$(document).on('click', '#setCashPwd', function () {
			var cashPwd1 = $('#cashPwd1').val();
			var cashPwd2 = $('#cashPwd2').val();
			if (cashPwd1 === cashPwd2) {
				$.ajax();
				$('.dialog-wrap').hide();
				B.alert({
					icon: 'success',
					title: '支付密码设置成功',
					content: '页面2秒后自动刷新...'
				});
			}
		});
	},
	event: function () {
		if ($('#setCashPwd').size()) {
			this.setCashPwd();
		}
	}
};
