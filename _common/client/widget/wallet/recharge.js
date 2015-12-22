/**
 * Created by chenzhenhua on 2015/12/21.
 */

var B = require('_common:js/bdb/core.js');
module.exports = {
	init: function () {
		this.event();
	},
	changeState: function (e) {
		var $this = $(e.currentTarget);
		if ('' == $this.val()) {
			$('#pay').addClass('btn-disabled');
		} else {
			$('#pay').removeClass('btn-disabled');
		}
	},
	pay: function () {
		$.ajax({
			type: 'post',
			dataType: 'json',
			url: '/_common/cash/recharge',
			data: {
				money: 100.00
			},
			success: function (data) {
				if (0 == data.status) {
					location.href = data.url;
				} else {
					var msg = data.msg || '服务器异常，请稍后再试';
					$('#pay').removeClass('btn-disabled');
					B.topWarn(msg);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				$('#pay').removeClass('btn-disabled');
				B.topWarn('服务器异常，请稍后再试');
			}
		});
	},
	event: function () {
		$('.page>.content').on('input propertychange', 'input[name="money"]', this.changeState.bind(this));
		$('.page>.content').on('click', '#pay:not(.btn-disabled)', this.pay.bind(this));
		if ('' != $('input[name="money"]').val()) {
			$('#pay').removeClass('btn-disabled');
		}
	}
}
