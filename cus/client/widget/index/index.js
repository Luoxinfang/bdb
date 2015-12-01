/**
 * Created by chenzhenhua on 2015/11/30.
 */

module.exports = {
	init: function () {
		this.events();
	},
	events: function () {
		$(document).on('click','.icon-me',function(){
			$('.index').addClass('small');
			$('body').css({
				height: '100%',
				overflow: 'hidden'
			});
			$('.body-container').css({
				height: '90%',
				overflow: 'hidden'
			});
			$('.bg-mark').addClass('show');
			$('.me').addClass('show');
			$('.r-mark').addClass('show');
		});
		$(document).on('click','.r-mark',function() {
			$('.index').removeClass('small');
			$('body').css({
				height: 'auto',
				overflow: 'auto'
			});
			$('.body-container').css({
				height: 'auto',
				overflow: 'auto'
			});
			$('.bg-mark').removeClass('show');
			$('.me').removeClass('show');
			$('.r-mark').removeClass('show');
		});
	}
};