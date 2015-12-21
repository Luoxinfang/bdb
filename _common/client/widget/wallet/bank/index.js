/**
 * Created by chenzhenhua on 2015/12/16.
 * 银行卡组件
 */
var B = require('_common:js/bdb/core.js');
var Cash = require('_common:js/bdb/cash.js');
module.exports = {
	init: function () {
		this.events();
	},
	bankNo: '',
	changeState: function (e) {
		var rightText = $(e.currentTarget);
		if (!$('.form').hasClass('delete')) {
			$('.form').addClass('delete');
			$('#addBank').hide();
			rightText.html('完成');
		} else {
			$('.form').removeClass('delete');
			$('#addBank').show();
			rightText.html('删除');
		}
	},
	showDelete: function (e) {
		this.bankNo = $(e.currentTarget).parent().find('.bankNo').val();
		$('#payPwdDialog').show();
	},
	deleteBank: function (e) {
		var payPwd = $('#payPwd').val().substr(0, 6);
		var bankNo = this.bankNo;
		if (payPwd.length >= 6) {
			Cash.opsAccount({
				payPwd: payPwd,
				success: function (data) {
					if (0 == data.status) {
						$.ajax({
							type: 'delete',
							dataType: 'json',
							url: '/_common/cash/bank',
							data: {
								bankNo: bankNo
							},
							success: function (data) {
								if (0 == data.status) {
									$('#payPwdDialog').hide();
									$('input[type="hidden"][value="' + bankNo + '"]').parents('.form-ul').remove();
								} else {
									var msg = data.msg || '服务器异常，请稍后再试';
									B.topWarn(msg);
								}
							},
							error: function (jqXHR, textStatus, errorThrown) {
								B.topWarn('服务器异常，请稍后再试');
							}
						});
					} else {
						var msg = data.msg || '服务器异常，请稍后再试';
						$('#payPwd').val('');
						$('.password-wrap .word').removeClass('filled');
						B.topWarn(msg);
					}
				},
				error: function () {
					$('#payPwd').val('');
					$('.password-wrap .word').removeClass('filled');
					B.topWarn('服务器异常，请稍后再试');
				}
			});
		} else {
			B.topWarn('支付密码为6位数字');
		}
	},
	events: function () {
		$('.header').on('click', '.right', this.changeState.bind(this));
		$('.page .content').on('click', '.deleteBank', this.showDelete.bind(this));
		$('.page .content').on('click', '#payPwdDialog .sure', this.deleteBank.bind(this));
	}
};