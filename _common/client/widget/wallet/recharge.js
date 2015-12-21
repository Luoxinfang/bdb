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
		B.alert('title', 'content', 'success');
	},
	event: function () {
		$('.page>.content').on('input propertychange', 'input[name="money"]', this.changeState.bind(this));
		$('.page>.content').on('click', '#pay:not(.btn-disabled)', this.pay.bind(this));
	}
}
