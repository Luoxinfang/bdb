/**
 * @author chenzhenhua
 * @createTime 2015-12-28
 * @description 订单列表页面JS
 */

var B = require('_common:js/bdb/core.js');
var Order = require('cus:widget/order/order.js');

module.exports = {
	init: function () {
		this.event();
	},
	// 订单状态tab切换
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
	event: function () {
		$('.header-tab').on('click', 'a:not(.on)', this.changeStatus.bind(this));
		$('.order-list').on('click', '.payOrder', function () {
			var order = {};
			order.orderNo = $(this).parents('.order-item').data('orderNo');
			order.money = $(this).parents('.order-item').data('money');
			Order.showPay(order);
		});
		$('.order-list').on('click', '.remindDeliver', function () {
			var order = {};
			order.orderNo = $(this).parents('.order-item').data('orderNo');
			Order.remindDeliver(order);
		});
		$('.order-list').on('click', '.confirmReceive', function () {
			var order = {};
			order.orderNo = $(this).parents('.order-item').data('orderNo');
			Order.confirmReceive(order);
		});
		$('.order-list').on('click', '.delayReceive', function () {
			var order = {};
			order.orderNo = $(this).parents('.order-item').data('orderNo');
			if (Order.delayReceive(order)) {
				$(this).remove();
			}
		});
	}
}
