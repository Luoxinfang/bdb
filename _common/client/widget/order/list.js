/**
 * Created by chenzhenhua on 2015/12/22.
 */

var B = require('_common:js/bdb/core.js');
var Cash = require('_common:js/bdb/cash.js');

module.exports = {
	init: function () {
		this.event();
	},
	/**
	 * 带参数跳转
	 */
	changeStatus: function (e) {
		var $this = $(e.currentTarget);
		var status = $this.attr('id');
		$.ajax({
			type: 'get',
			dataType: 'html',
			url: '/order/list',
			data: {
				type: 'page',
				status: status
			},
			success: function (data) {
				$this.siblings().removeClass('on');
				$this.addClass('on');
				$('.order-list').data('page', 1);
				$('.order-list').html(data);
			},
			error: function (jqXHR, textStatus, errorThrown) {
				B.topWarn(B.tips.networkError);
			}
		});
	},
	/**
	 * 上拉加载
	 */
	dropLoad: function () {
		var bTime = $('.trans-time input[name="bTime"]').val() == '' ? '' : $('.trans-time input[name="bTime"]').val() + ' 00:00:00';
		var eTime = $('.trans-time input[name="eTime"]').val() == '' ? '' : $('.trans-time input[name="eTime"]').val() + ' 23:59:59';
		var tradeType = $('.header .filter span').data('filter');
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
					url: '/wallet/trans-list',
					data: {
						type: 'page',
						page: $('.trans-list').data('page') + 1,
						bTime: bTime,
						eTime: eTime,
						tradeType: tradeType
					},
					success: function (data) {
						if (data) {
							$('.trans-list').data('page', $('.trans-list').data('page') + 1);
							$('.trans-list').append(data);
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
		$('.header-tab').on('click', 'a:not(.on)', this.changeStatus.bind(this));
	}
}
