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
			$('.mark').show();
		});
	}
};