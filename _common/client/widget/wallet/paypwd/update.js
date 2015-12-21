/**
 * Created by chenzhenhua on 2015/12/16.
 * 支付密码模块
 */

var B = require('_common:js/bdb/core.js');
module.exports = {
	init: function () {
		this.event();
	},
	setOldPayPwd: function () {
		var oldPayPwd = '';
		$('.page>.content').on('input propertychange', '#oldPayPwd', function () {
			var num = $(this).val().length;
			if (num >= 6) {
				oldPayPwd = $(this).val().substr(0, 6);
				$.ajax({
					type: 'get',
					dataType: 'json',
					url: '/_common/cash/pwd',
					data: {
						payPwd: oldPayPwd
					},
					success: function (data) {
						if (0 == data.status) {
							$('#payPwdStep0').hide();
							$('#payPwdStep1').show();
						} else {
							var msg = data.msg || '服务器异常，请稍后再试';
							$('#oldPayPwd').val('');
							$('.password-wrap .word').removeClass('filled');
							B.topWarn(msg);
						}
					},
					error: function (jqXHR, textStatus, errorThrown) {
						$('#oldPayPwd').val('');
						$('#payPwdStep0 .password-wrap .word').removeClass('filled');
						B.topWarn('服务器异常，请稍后再试');
					}
				});
			}
		});
	},
	setNewPayPwd: function () {
		var newPayPwd1 = '';
		var newPayPwd2 = '';
		$('.page>.content').on('input propertychange', '#newPayPwd1', function () {
			var num = $(this).val().length;
			if (num >= 6) {
				newPayPwd1 = $(this).val().substr(0, 6);
				$('#payPwdStep1').hide();
				$('#payPwdStep2').show();
			}
		});
		$('.page>.content').on('input propertychange', '#newPayPwd2', function () {
			var num = $(this).val().length;
			if (num >= 6) {
				newPayPwd2 = $(this).val().substr(0, 6);
				if (newPayPwd1 == newPayPwd2) {
					var before = +new Date();
					var timer = setTimeout(function () {
						B.alert({
							title: '验证中...',
							icon: 'loading',
							time: false
						});
					}, 400);
					$.ajax({
						type: 'post',
						dataType: 'json',
						url: '/_common/cash/pwd',
						data: {
							payPwd: newPayPwd1
						},
						success: function (data) {
							var after = +new Date();
							if (before + 400 > after) {
								clearTimeout(timer);
							}
							if (0 == data.status) {
								B.clearAlert();
								$('#payPwdStep2').hide();
								$('.header .icon-back').hide();
								$('#result').show();
							} else {
								B.clearAlert();
								var msg = data.msg || '服务器异常，请稍后再试';
								$('#newPayPwd2').val('');
								$('#payPwdStep2 .password-wrap .word').removeClass('filled');
								B.topWarn(msg);
							}
						},
						error: function (jqXHR, textStatus, errorThrown) {
							B.clearAlert();
							$('#newPayPwd2').val('');
							$('#payPwdStep2 .password-wrap .word').removeClass('filled');
							B.topWarn('服务器异常，请稍后再试');
						}
					});
				} else {
					$('#newPayPwd1').val('');
					$('#newPayPwd2').val('');
					$('.password-wrap .word').removeClass('filled');
					$('#payPwdStep2').hide();
					$('#payPwdStep1').show();
					B.topWarn('两次密码输入不一致，请重新输入！');
				}
			}
		});
	},
	event: function () {
		if ($('#oldPayPwd').size()) {
			this.setOldPayPwd();
		}
		this.setNewPayPwd();
	}
};
