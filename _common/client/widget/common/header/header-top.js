/**
 * Created by chenzhenhua on 2015/11/30.
 */

module.exports = {
	init: function () {
		this.events();
	},
	events: function () {
		if ($('.body-container').offset().top <= 0) {
			$('.body-container').scroll(function () {
				var height = 200;
				var scrollTop = $('.body-container')[0].scrollTop;
				var alpha = scrollTop > height ? 0.8 : scrollTop / height * 0.8;
				$('.header-top').css({
					'background': 'rgba(57,59,66,' + alpha + ')'
				});
			});
		}
	}
};