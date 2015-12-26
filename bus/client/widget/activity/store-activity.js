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
		var url = '/activity/store-activity?';
		if($("#start").hasClass("on")) {
			status = '1';
		}else if ($("#notStart").hasClass("on")) {
			status = '0';
		}else {
			status = '2';
		}
		url = url + 'status='+status;
		location.href = url;
	},
	/**
	 * 点击过滤
	 */
	filter1: function (e) {
		$('#start').removeClass('on');
		$('#introduced').removeClass('on');
		$('#notStart').addClass('on');
		this.jump();
	},
	filter2: function (e) {
		$('#start').removeClass('on');
		$('#notStart').removeClass('on');
		$('#introduced').addClass('on');
		this.jump();
	},
	filter3: function (e) {
		$('#notStart').removeClass('on');
		$('#introduced').removeClass('on');
		$('#start').addClass('on');
		this.jump();
	},
	event: function () {
		$('.header').on('click', '#introduced', this.filter2.bind(this));
		$('.header').on('click', '#notStart', this.filter1.bind(this));
		$('.header').on('click', '#start', this.filter3.bind(this));

	}
};
