/**
 * Created by chenzhenhua on 2015/12/21.
 */

var B = require('_common:js/bdb/core.js');
module.exports = {
	init: function () {
		this.event();
	},
	bankNo: '',
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
		var option = $(e.currentTarget).parent();
		$('input[name="bankNo"]').val(option.find('.bankNo').val());
		$('[data-role="bankNo"]').html(option.text());
		option.parents('.dialog-wrap').hide();
	},
	nextStep: function () {
		$('#payPwdDialog').show();
	},
	withdraw: function (e) {
		var payPwd = $(e.currentTarget).val().substr(0, 6);
		if (payPwd.length >= 6) {
			$('.dialog-wrap').hide();
			$('#withdraw').hide();
			$('#result').show();
		}
	},
	event: function () {
		$('.dialog').on('change', 'input[name="bank"]', this.changeBank.bind(this));
		$('.page .content').on('input propertychange', 'input[name="money"]', this.changeState.bind(this));
		$('.page .content').on('click', '#nextStep:not(.btn-disabled)', this.nextStep.bind(this));
		$('.dialog').on('input propertychange', '#payPwd', this.withdraw.bind(this));
	}
}
