/**
 * Created by chenzhenhua on 2015/12/16.
 * 银行卡组件
 */
var B = require('_common:js/bdb/core.js');
module.exports = {
	init: function () {
		this.events();
	},
	addBank: function () {
		var checkForm = function () {
			if ($('input[name="bankNo"]').val() != '' && $('input[name="openAddress"]').val() != '') {
				return true;
			} else {
				return false;
			}
		}
		$('.body-container').on('click', '#addBank:not(.btn-disabled)', function () {
			$(this).addClass('btn-disabled');
			$.ajax({
				type: 'post',
				dataType: 'json',
				url: '/_common/cash/bank',
				data: $('#form').serialize(),
				success: function (data) {
					console.log(data);
					if (0 == data.status) {
						B.alert({
							title: '银行卡新增成功',
							content: '跳转至银行卡管理页面...',
							time: 400,
							callback: function () {
								location.href = '/wallet/bank';
							}
						});
					} else {
						var msg = data.msg || '服务器异常，请稍后再试';
						$('#addBank').removeClass('btn-disabled');
						B.topWarn(msg);
					}
				},
				error: function (jqXHR, textStatus, errorThrown) {
					$('#addBank').removeClass('btn-disabled');
					B.topWarn('服务器异常，请稍后再试');
				}
			});
		});
		$('.body-container').on('input propertychange', 'input[name="bankNo"]', function () {
			if (checkForm()) {
				$('#addBank').removeClass('btn-disabled');
			} else {
				$('#addBank').addClass('btn-disabled');
			}

		});
		$('.body-container').on('input propertychange', 'input[name="openAddress"]', function () {
			if (checkForm()) {
				$('#addBank').removeClass('btn-disabled');
			} else {
				$('#addBank').addClass('btn-disabled');
			}
		});
	},
	validPayPwd: function () {
		var payPwd = '';
		$('.body-container').on('input propertychange', '#payPwd', function () {
			var num = $(this).val().length;
			if (num >= 6) {
				payPwd = $(this).val().substr(0, 6);
				B.alert({
					title: '验证中...',
					icon: 'loading',
					time: false
				});
				var before = +new Date();
				$.ajax({
					type: 'post',
					dataType: 'json',
					url: '/_common/cash/ops-account',
					data: {
						payPwd: payPwd
					},
					success: function (data) {
						var after = +new Date();
						setTimeout(function () {
							if (0 == data.status) {
								B.clearAlert();
								$('#validPayPwd').hide();
								$('#addBankDiv').show();
							} else {
								var msg = data.msg || '服务器异常，请稍后再试';
								B.clearAlert();
								$('#payPwd').val('');
								$('.password-wrap .word').removeClass('filled');
								B.topWarn(msg);
							}
						}, before + 400 - after);
					},
					error: function (jqXHR, textStatus, errorThrown) {
						var after = +new Date();
						setTimeout(function () {
							B.clearAlert();
							$('#payPwd').val('');
							$('.password-wrap .word').removeClass('filled');
							B.topWarn('服务器异常，请稍后再试');
						}, before + 1000 - after);
					}
				});
			}
		});
	},
	events: function () {
		if ($('#validPayPwd').size()) {
			this.validPayPwd();
		}
		this.addBank();
	}
};