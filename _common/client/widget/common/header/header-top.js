/**
 * Created by chenzhenhua on 2015/11/30.
 */

module.exports = {
	init: function () {
		this.events();
	},
	events: function () {
		if ($('.page>.content').offset().top <= 0) {
			$('.page>.content').scroll(function () {
				var height = 200;
				var scrollTop = $('.page>.content')[0].scrollTop;
				var alpha = scrollTop > height ? 0.8 : scrollTop / height * 0.8;
				$('.header-top').css({
					'background': 'rgba(57,59,66,' + alpha + ')'
				});
			});
		}
	}
};