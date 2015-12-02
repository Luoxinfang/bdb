/**
 * Created by chenzhenhua on 2015/11/30.
 */

module.exports = {
	init: function () {
		this.events();
	},
	events: function () {
		$('.body-container').scroll(function () {
			//console.log($('.body-container').scrollTop());
			var height = $('.banner').height();
			var scrollTop = $('.body-container')[0].scrollTop;
			var alpha = scrollTop > height ? 0.8 : scrollTop/height*0.8;
			$('.header-top').css({
				'background': 'rgba(57,59,66,'+alpha+')'
			});
		});
	}
};