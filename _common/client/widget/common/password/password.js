/**
 * Created by chenzhenhua on 2015/12/8.
 */

module.exports = {
	init: function () {
		this.events();
	},
	events: function () {
		var showPassword = function ($wrap, num) {
			$wrap.find('.word').each(function () {
				if ($(this).index() < num) {
					$(this).addClass('filled');
				} else {
					$(this).removeClass('filled');
				}
			});
		}
		$(document).on('input propertychange', '.password-wrap .password', function () {
			var num = $(this).val().length;
			if (num > 6) {
				$(this).val($(this).val().substr(0,6));
			}
			showPassword($(this).parent(), num);
		});
	},
};