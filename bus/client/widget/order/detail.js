/**
 * @author chenzhenhua
 * @createTime 2016-01-05
 * @description 订单详情页面JS
 */

var B = require('_common:js/bdb/core.js');
var Order = require('bus:widget/order/order.js');

module.exports = {
	init: function () {
		this.event();
	},
	event: function () {
		$('.footer').on('click', '.payOrder', function () {
			var order = {};
			order.orderId = $('.order').data('orderId');
			order.orderNo = $('.order').data('orderNo');
			order.money = $('.order').data('money');
			Order.showPay(order);
		});
		$('.footer').on('click', '.remindDeliver', function () {
			var order = {};
			order.orderNo = $('.order').data('orderNo');
			Order.remindDeliver(order);
		});
		$('.footer').on('click', '.confirmReceive', function () {
			var order = {};
			order.orderNo = $(this).parents('.order').data('orderNo');
			Order.confirmReceive(order);
		});
		$('.footer').on('click', '.delayReceive', function () {
			var order = {};
			order.orderNo = $(this).parents('.order').data('orderNo');
			if (Order.delayReceive(order)) {
				$(this).remove();
			}
		});
	}
}
