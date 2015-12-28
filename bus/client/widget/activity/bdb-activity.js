/**
 * @author pulang.
 */
var B = require('_common:js/bdb/core.js');

module.exports = {
	init: function () {
		this.event();
	},
	/**
	 * 带参数跳转
	 */
	jump: function (e) {
		var status = '';
		var url = '/activity/bdb-activity?';
		if($("#registration").hasClass("on")) {
			status = '0';
		}else {
			status = '1';
		}
		url = url + 'status='+status;
		location.href = url;
	},
	/**
	 * 点击过滤
	 */
	filter1: function (e) {
		$("#start").removeClass('on');
		$('#registration').addClass('on');
		this.jump();
	},
	filter2: function (e) {
		$("#registration").removeClass('on');
		$('#start').addClass('on');
		this.jump();
	},

	event: function () {
		/*$('.page>.header').on('click', '#registration', this.jump.bind(this));*/
		$('.header').on('click', '#registration', this.filter1.bind(this));
		$('.header').on('click', '#start', this.filter2.bind(this));

	}
};
