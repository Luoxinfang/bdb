/**
 * Created by chenzhenhua on 2015/12/11.
 */

module.exports = {
	init: function () {
		this.events();
	},
	events: function () {
		$('.header').on('click','.filter',function(){
			$('.header-filter').show();
		});
		$('.header').on('click','.filter-mask',function(){
			$('.header-filter').hide();
		});
	}
};