/**
 * Created by chenzhenhua on 2015/12/16.
 * 银行卡组件
 */
var B = require('_common:js/bdb/core.js');
module.exports = {
	init: function () {
		this.events();
	},
	checkForm: function () {
		var valid = function () {
			if ($('input[name="bankNo"]').val() != '' && $('input[name="openAddress"]').val() != '') {
				return true;
			} else {
				return false;
			}
		}
		if (valid()) {
			$('#addBank').removeClass('btn-disabled');
		} else {
			$('#addBank').addClass('btn-disabled');
		}
	},
	addBank: function () {
		$('#addBank').addClass('btn-disabled');
		$.ajax({
			type: 'put',
			dataType: 'json',
			url: '/_common/cash/bank',
			data: $('#form').serialize(),
			success: function (data) {
				if (0 == data.status) {
					B.alert({
						title: '银行卡新增成功',
						content: '跳转至银行卡管理页面...',
						icon: 'success',
						time: 1000,
						callback: function () {
							location.href = '/wallet/bank';
						}
					});
				} else {
					var msg = data.msg || B.tips.networkError;
					$('#addBank').removeClass('btn-disabled');
					B.topWarn(msg);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				$('#addBank').removeClass('btn-disabled');
				B.topWarn(B.tips.networkError);
			}
		});

	},
	validPayPwd: function () {
		var payPwd = $('#payPwd').val();
		var num = payPwd.length;
		if (num >= 6) {
			payPwd = payPwd.substr(0, 6);
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
				url: '/_common/cash/ops-account',
				data: {
					payPwd: payPwd
				},
				success: function (data) {
					var after = +new Date();
					if (before + 400 > after) {
						clearTimeout(timer);
					}
					if (0 == data.status) {
						B.clearAlert();
						$('#validPayPwd').hide();
						$('#addBankDiv').show();
					} else {
						var msg = data.msg || B.tips.networkError;
						B.clearAlert();
						$('#payPwd').val('');
						$('.password-wrap .word').removeClass('filled');
						B.topWarn(msg);
					}
				},
				error: function (jqXHR, textStatus, errorThrown) {
					var after = +new Date();
					if (before + 400 > after) {
						clearTimeout(timer);
					}
					B.clearAlert();
					$('#payPwd').val('');
					$('.password-wrap .word').removeClass('filled');
					B.topWarn(B.tips.networkError);
				}
			});
		}
	},
	events: function () {
		if ($('#validPayPwd').size()) {
			$('.page>.content').on('input propertychange', '#payPwd', this.validPayPwd.bind(this));
		}
		$('.page>.content').on('click', '#addBank:not(.btn-disabled)', this.addBank.bind(this));
		$('.page>.content').on('input propertychange', 'input[name="bankNo"]', this.checkForm.bind(this));
		$('.page>.content').on('input propertychange', 'input[name="openAddress"]', this.checkForm.bind(this));
	}
}