/**
 * Created by chenzhenhua on 2015/12/11.
 */

module.exports = {
	init: function () {
		this.events();
	},
	events: function () {
		$(document).on('click','.header .sort',function(){
			$('.header-sort').show();
		});
		$(document).on('click','.sort-mask',function(){
			$('.header-sort').hide();
		});
		$(document).on('click','.sort-list a',function(){
			$('.header .sort').html($(this).html());
			$('.header-sort').hide();
		});
	}
};