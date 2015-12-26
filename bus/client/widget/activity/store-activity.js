/**
 * @author pulang.
 */
var B = require('_common:js/bdb/core.js');

module.exports = {
	init: function () {
		this.event();
	},

	event: function () {
		$("#notStart").click(function(){
			$("#start").removeClass('on');
			$("#introduced").removeClass('on');
			$(this).addClass('on');
		});
		$("#introduced").click(function(){
			$("#start").removeClass('on');
			$("#notStart").removeClass('on');
			$(this).addClass('on');
		});
		$("#start").click(function(){
			$("#notStart").removeClass('on');
			$("#introduced").removeClass('on');
			$(this).addClass('on');
		});
	}
};
