/**
 * @author chenzhenhua
 * @createTime 2016-01-05
 * @description 订单列表页面JS
 */

var B = require('_common:js/bdb/core.js');
var Order = require('bus:widget/order/order.js');

module.exports = {
	init: function () {
		this.bindScroll();
		this.event();
	},
	// 订单状态tab切换
	changeStatus: function (e) {
		var that = this;
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
				$('.order-list').html('');
				var html = $('.page>.content').html();
				$('#orderList').remove();
				$('.page>.content').html(html);
				$('.order-list').html(data);
				that.bindScroll();
			},
			error: function (jqXHR, textStatus, errorThrown) {
				B.topWarn(B.tips.networkError);
			}
		});
	},
	// 绑定订单列表的滑动
	bindScroll: function () {
		var that = this;
		that.pageSize = 10;
		that.pageNum = 1;
		$('#orderList').dropload({
			loadUpFn: function (me) {
				that.pageNum = 1;
				that.getOrderList.bind(that)('refresh', me);
			},
			loadDownFn: function (me) {
				that.pageNum = that.pageNum + 1;
				that.getOrderList.bind(that)('append', me);
			}
		});
	},
	// 获取订单列表
	getOrderList: function (type, dropLoad) {
		var that = this;
		var stauts = $('.header-tab a.on').attr('id');
		var $orderList = $('.orderList');
		$.ajax({
			type: 'get',
			dataType: 'html',
			url: '/order/list',
			data: {
				type: 'get',
				page: that.pageNum,
				pageSize: that.pageSize,
				status: stauts
			},
			success: function (html) {
				if (type === 'append') {
					$orderList.append(html);
					that.total = +$orderList.children('.order-item').data('total') || that.pageSize;
					var maxPage = Math.ceil(that.total / that.pageSize);
					if (that.pageNum >= maxPage) {
						dropLoad.lock();
						dropLoad.noData();
					}
				} else {
					that.total = +$orderList.children('.order-item').data('total') || that.pageSize;
					$orderList.html(html);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				B.topWarn(B.tips.networkError);
			},
			complete: function () {
				if (dropLoad) {
					dropLoad.resetload();
				}
			}
		});
	},
	event: function () {
		$('.header-tab').on('click', 'a:not(.on)', this.changeStatus.bind(this));
		$('.order-list').on('click', '.payOrder', function () {
			var order = {};
			order.orderId = $(this).parents('.order-item').data('orderId');
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
