/**
 * Created by chenzhenhua on 2015/12/5.
 */

module.exports = {
	init: function () {
		this.events();
	},
	events: function () {
		$(document).on('click','.showDialog',function(){
			var dialog = $('#'+$(this).attr('dialog'));
			dialog.show();
		});
		$(document).on('click','.dialog-mask',function(){
			$(this).parent().hide();
		});
	}
};