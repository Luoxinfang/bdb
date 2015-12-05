/**
 * Created by chenzhenhua on 2015/12/5.
 */

module.exports = {
	init: function () {
		this.events();
	},
	events: function () {
		var hideActionSheet = function (actionsheet, mask) {
			actionsheet.removeClass('actionsheet-toggle');
			mask.removeClass('fade-toggle');
			actionsheet.on('transitionend', function () {
				mask.hide();
			}).on('webkitTransitionEnd', function () {
				mask.hide();
			})
		}
		$(document).on('click','.showActionsheet', function () {
			var actionsheetWrap = $('#'+$(this).attr('actionsheet'));
			var mask = actionsheetWrap.find('.mask');
			var actionsheet = actionsheetWrap.find('.actionsheet');
			actionsheet.addClass('actionsheet-toggle');
			mask.show().addClass('fade-toggle').click(function () {
				hideActionSheet(actionsheet, mask);
			});
			$('.actionsheet-cancel').click(function () {
				hideActionSheet(actionsheet, mask);
			});
			actionsheet.unbind('transitionend').unbind('webkitTransitionEnd');
		});
	}
};