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
	/**
	 * 上拉加载
	 */
	dropLoad: function () {
		var dropload = $('.page>.content').dropload({
			domDown: {
				domClass: 'dropload-down',
				domRefresh: '<div class="dropload-refresh">↑上拉加载更多</div>',
				domUpdate: '<div class="dropload-update">↓释放加载</div>',
				domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>'
			},
			loadDownFn: function (me) {
				$.ajax({
					type: 'get',
					dataType: 'html',
					url: '/activity/bdb-activity',
					data: {
						type: 'page',
						page: $('.activity-list').data('page') + 1
					},
					success: function (data) {
						if (data) {
							$('.activity-list').data('page', $('.activity-list').data('page') + 1);
							$('.activity-list').append(data);
							$('.dropload-load').html('加载完毕~');
							setTimeout(function () {
								me.resetload();
							}, 800);
						} else {
							$('.dropload-load').html('没有更多记录了~');
							setTimeout(function () {
								me.resetload();
							}, 800);
						}
					},
					error: function (jqXHR, textStatus, errorThrown) {
						B.topWarn(B.tips.networkError);
					}
				});
			}
		});
	},
	event: function () {
		$('.header').on('click', '#registration', this.filter1.bind(this));
		$('.header').on('click', '#start', this.filter2.bind(this));
		this.dropLoad();
	}
};
