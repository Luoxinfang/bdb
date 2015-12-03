/**
 * Created by Administrator on 2015/12/3.
 */

module.exports = {
	init: function () {
		this.events();
	},
	events: function () {
		$(document).on('input propertychange', '.search-box input', function () {
			if ($('.search-box input').val() == '') {
				$('.search-box .reset').hide();
			} else {
				$('.search-box .reset').show();
			}
		});
		$(document).on('click', '.search-box .reset', function () {
			$('.search-box input').val('');
			$('.search-box .reset').hide();
		});
	}
};