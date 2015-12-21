/**
 * Created by chenzhenhua on 2015/12/21.
 */

var B = require('_common:js/bdb/core.js');
var Cash = require('_common:js/bdb/cash.js');
module.exports = {
	init: function () {
		this.event();
	},
	changeState: function (e) {
		var $this = $(e.currentTarget);
		if ($this.attr('name') == 'money') {
			$('[data-role="money"]').html(parseFloat($this.val()).toFixed(2));
			if (parseFloat($this.val()) >= 100) {
				$('#nextStep').removeClass('btn-disabled');
			} else {
				$('#nextStep').addClass('btn-disabled');
			}
		}
	},
	changeBank: function (e) {
		var option = $(e.currentTarget);
		$('input[name="bankNo"]').val(option.val());
		$('[data-role="bankNo"]').html(option.parent().text());
		option.parents('.dialog-wrap').hide();
	},
	nextStep: function () {
		$('#payPwdDialog').show();
	},
	withdraw: function (e) {
		var payPwd = $(e.currentTarget).val().substr(0, 6);
		if (payPwd.length >= 6) {
			Cash.opsAccount({
				payPwd: payPwd,
				success: function (data) {
					if (0 == data.status) {
						var bankNo = $('input[name="bankNo"]').val();
						var money = parseFloat($('input[name="money"]').val()).toFixed(2);
						$.ajax({
							type: 'post',
							dataType: 'json',
							url: '/_common/cash/withdraw',
							data: {
								bankNo: bankNo,
								money: money
							},
							success: function (data) {
								if (0 == data.status) {
									$('.dialog-wrap').hide();
									$('#withdraw').hide();
									$('#result').show();
								} else {
									var msg = data.msg || '服务器异常，请稍后再试';
									$('#payPwd').val('');
									$('.password-wrap .word').removeClass('filled');
									B.topWarn(msg, 2000);
								}
							},
							error: function (jqXHR, textStatus, errorThrown) {
								$('#payPwd').val('');
								$('.password-wrap .word').removeClass('filled');
								B.topWarn('服务器异常，请稍后再试', 2000);
							}
						});
					} else {
						var msg = data.msg || '服务器异常，请稍后再试';
						$('#payPwd').val('');
						$('.password-wrap .word').removeClass('filled');
						B.topWarn(msg, 2000);
					}
				},
				error: function () {
					$('#payPwd').val('');
					$('.password-wrap .word').removeClass('filled');
					B.topWarn('服务器异常，请稍后再试', 2000);
				}
			});
		}
	},
	event: function () {
		$('.dialog').on('change', 'input[name="bank"]', this.changeBank.bind(this));
		$('.page>.content').on('input propertychange', 'input[name="money"]', this.changeState.bind(this));
		$('.page>.content').on('click', '#nextStep:not(.btn-disabled)', this.nextStep.bind(this));
		$('.dialog').on('input propertychange', '#payPwd', this.withdraw.bind(this));
	}
}
