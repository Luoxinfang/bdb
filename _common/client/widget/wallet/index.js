/**
 * Created by chenzhenhua on 2015/12/15.
 */

var B = require('_common:js/bdb/core.js');

module.exports = {
	init: function () {
		this.event();
	},
	setPayPwd: function () {
		$(document).on('click', '#nextPayPwd', function () {
			var payPwd1 = $('#payPwd1').val();
			if (payPwd1.length <= 5) {
				B.topWarn('支付密码为6位数字');
			} else {
				$('#payPwdStep1').hide();
				$('#payPwdStep2').show();
			}
		});
		$(document).on('click', '#setPayPwd', function () {
			var payPwd1 = $('#payPwd1').val();
			var payPwd2 = $('#payPwd2').val();
			if (payPwd1 === payPwd2) {
				$.ajax({
					type: 'put',
					dataType: 'json',
					url: '/_common/cash/pwd',
					data: {
						payPwd: payPwd1
					},
					success: function (data) {
						if (0 == data.status) {
							$('.dialog-wrap').hide();
							B.alert({
								icon: 'success',
								title: '支付密码设置成功',
								content: '页面2秒后自动刷新...',
								callback: function () {
									location.href = '/wallet';
								}
							});
						} else {
							var msg = data.msg || '服务器异常，请稍后再试';
							B.topWarn(msg);
						}
					}
				});
			} else {
				B.topWarn('两次支付密码输入不一致，重新输入');
				$('#payPwdStep2').hide();
				$('#payPwdStep1').show();
				$('#payPwd1').val('');
				$('#payPwd2').val('');
				$('.password-wrap .word').removeClass('filled');
			}
		});
	},
	event: function () {
		if ($('#setPayPwd').size()) {
			this.setPayPwd();
		}
	}
};
