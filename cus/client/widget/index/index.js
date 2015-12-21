/**
 * Created by chenzhenhua on 2015/11/30.
 */

module.exports = {
	init: function () {
		this.events();
	},
	events: function () {
		$(document).on('click','.icon-me',function(){
			$('.wrapper').addClass('small');
			$('body').addClass('body-me');
			$('.bg-mark').addClass('show');
			$('.me').addClass('show');
			$('.r-mark').addClass('show');
		});
		$(document).on('click','.r-mark',function() {
			$('.wrapper').css({
				'transition':'all 0.8s ease-in-out'
			});
			$('.wrapper').removeClass('small');
			$('body').removeClass('body-me');
			$('.page .content').css({
				height: 'auto',
				overflow: 'auto'
			});
			$('.bg-mark').removeClass('show');
			$('.me').removeClass('show');
			$('.r-mark').removeClass('show');
		});
	}
};