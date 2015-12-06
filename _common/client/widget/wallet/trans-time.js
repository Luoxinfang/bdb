/**
 * Created by chenzhenhua on 2015/12/5.
 */

module.exports = {
	init: function () {
		this.events();
	},
	events: function () {
		$(document).on('change', '.trans-time input', function () {
			$(this).prev().text($(this).val());
		});
	}
};
