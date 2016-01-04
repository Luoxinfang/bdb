/**
 * @author chenzhenhua
 * @createTime 2015-12-29
 * @description 订单模块方法
 */

var B = require('_common:js/bdb/core.js');
var Cash = require('_common:js/bdb/cash.js');

module.exports = {
	result: {
		paySuccess: function (order) {
			return {
				type: 'success',
				header: {
					title: '我的订单'
				},
				content: {
					tit: '支付成功，请耐心等待商家发货！',
					msg: '我们会以短信的方式通知您订单发货，请注意查收！\n3秒后自动跳转到我的订单页面...'
				},
				btn: {
					href: '/order/list',
					txt: '完成'
				},
				autoJump: true
			};
		},
		payFail: function (order) {
			return {
				type: "error",
				header: {
					title: "我的订单"
				},
				content: {
					tit: "支付失败",
					msg: "抱歉，支付失败，3秒后自动返回到订单页面..."
				},
				btn: {
					href: "/order/list",
					txt: "继续支付"
				},
				autoJump: true
			};
		},
		receiveSuccess: function (order) {
			return {
				type: 'success',
				header: {
					title: '确认收货',
					rightText: '完成',
					rightUrl: '/order/list'
				},
				content: {
					tit: '订单：' + order.orderNo + '，已确认收货！'
				},
				btn: {
					href: '/order/comment/' + order.orderNo,
					txt: '去评论'
				}
			}
		}
	},
	// 延时收货
	delayReceive: function (order) {
		$.ajax({
			type: 'post',
			dataType: 'json',
			url: '/order/delay-receive',
			data: {
				orderNo: order.orderNo
			},
			success: function (data) {
				if (0 == data.status) {
					B.alert({
						icon: 'success',
						title: '成功延时3天收货',
						content: '已经延时3天收货，若3天仍未到货，请联系卖家~'
					});
					return true;
				} else {
					var msg = data.msg || B.tips.networkError;
					B.topWarn(msg);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				B.topWarn(B.tips.networkError);
			}
		});
		return false;
	},
	// 确认收货
	confirmReceive: function (order) {
		var that = this;
		var html = [];
		html.push('<div class="dialog-wrap order-pay" style="display: block" id="pay">');
		html.push('	<div class="dialog-mask"></div>');
		html.push('	<div class="dialog pb10">');
		html.push('		<div class="dialog-close closeDialog"></div>');
		html.push('		<div class="dialog-hd">确认收货</div>');
		html.push('		<div class="dialog-bd">');
		html.push('			<div class="password-wrap mt20">');
		html.push('				<div class="word"></div>');
		html.push('				<div class="word"></div>');
		html.push('				<div class="word"></div>');
		html.push('				<div class="word"></div>');
		html.push('				<div class="word"></div>');
		html.push('				<div class="word"></div>');
		html.push('				<input type="number" class="password" >');
		html.push('			</div>');
		html.push('			<div class="tip">请输入支付密码</div>');
		html.push('		</div>');
		html.push('	</div>');
		html.push('</div>');
		$('.toolbar').html(html.join('')).show();
		$('.toolbar').on('input', '.password-wrap .password', function () {
			var payPwd = $(this).val();
			if (payPwd.length >= 6) {
				payPwd = payPwd.substr(0, 6);
				$.ajax({
					type: 'post',
					dataType: 'json',
					url: '/order/confirm-receive',
					data: {
						payPwd: payPwd,
						orderNo: order.orderNo
					},
					success: function (data) {
						if (0 == data.status) {
							location.href = '/_common/result?data=' + JSON.stringify(that.result.receiveSuccess(order));
						} else {
							var msg = data.msg || B.tips.networkError;
							$('.toolbar .password-wrap .password').val('');
							$('.toolbar .password-wrap .word').removeClass('filled');
							B.topWarn(msg);
						}
					},
					error: function (jqXHR, textStatus, errorThrown) {
						$('.toolbar .password-wrap .password').val('');
						$('.toolbar .password-wrap .word').removeClass('filled');
						B.topWarn(B.tips.networkError);
					}
				});
			}
		});
	},
	// 提醒发货
	remindDeliver: function (order) {
		$.ajax({
			type: 'post',
			dataType: 'json',
			url: '/order/remind-deliver',
			data: {
				orderNo: order.orderNo
			},
			success: function (data) {
				if (0 == data.status) {
					B.alert({
						icon: 'success',
						title: '提醒发货成功',
						content: '已经通知卖家尽快发货~',
						time: 2000
					});
				} else {
					var msg = data.msg || B.tips.networkError;
					B.topWarn(msg);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				B.topWarn(B.tips.networkError);
			}
		});
	},
	// 显示支付方式
	showPay: function (order) {
		var that = this;
		var html = [];
		html.push('<div class="dialog-wrap order-pay" id="pay-' + order.orderNo + '" style="display: block">');
		html.push('	<div class="dialog-mask removeDialog"></div>');
		html.push('	<div class="dialog pb0">');
		html.push('		<div class="dialog-hd">选择支付方式</div>');
		html.push('		<div class="dialog-bd">');
		html.push('			<label for="way-1" class="way">');
		html.push('				<span>使用零钱支付</span>');
		html.push('				<input type="radio" value="1" name="payWay" id="way-1" checked>');
		html.push('				<i class="icon-40 icon-radio"></i>');
		html.push('			</label>');
		html.push('			<label for="way-2" class="way">');
		html.push('				<span>使用京东支付</span>');
		html.push('				<input type="radio" value="4" name="payWay" id="way-2">');
		html.push('				<i class="icon-40 icon-radio"></i>');
		html.push('			</label>');
		html.push('			<label for="way-3" class="way">');
		html.push('				<span>使用易宝支付</span>');
		html.push('				<input type="radio" value="3" name="payWay" id="way-3">');
		html.push('				<i class="icon-40 icon-radio"></i>');
		html.push('			</label>');
		html.push('			<a class="sure">确定</a>');
		html.push('		</div>');
		html.push('	</div>');
		html.push('</div>');
		$('.toolbar').html(html.join(''));
		$('.toolbar').on('click', '#pay-' + order.orderNo + ' .sure', function () {
			that.pay(order, $('#pay-' + order.orderNo + ' input[name="payWay"]:checked').val());
		});
	},
	// 支付
	pay: function (order, payWay) {
		var that = this;
		if ('1' == payWay) {
			that.payByWallet(order);
		} else {
			var way = {
				type: payWay,
				code: '2'
			};
			that.payOnline(order, way);
		}
	},
	// 零钱支付
	payByWallet: function (order) {
		var that = this;
		var html = [];
		html.push('<div class="dialog-wrap order-pay" style="display: block" id="pay">');
		html.push('	<div class="dialog-mask"></div>');
		html.push('	<div class="dialog pb10">');
		html.push('		<div class="dialog-close closeDialog"></div>');
		html.push('		<div class="dialog-hd">确认付款</div>');
		html.push('		<div class="dialog-bd">');
		html.push('			<div class="price">￥' + order.money + '</div>');
		html.push('			<div class="password-wrap">');
		html.push('				<div class="word"></div>');
		html.push('				<div class="word"></div>');
		html.push('				<div class="word"></div>');
		html.push('				<div class="word"></div>');
		html.push('				<div class="word"></div>');
		html.push('				<div class="word"></div>');
		html.push('				<input type="number" class="password" >');
		html.push('			</div>');
		html.push('			<div class="tip">请输入支付密码</div>');
		html.push('		</div>');
		html.push('	</div>');
		html.push('</div>');
		$('.toolbar').html(html.join(''));
		$('.toolbar').on('input', '.password-wrap .password', function () {
			var payPwd = $(this).val();
			if (payPwd.length >= 6) {
				payPwd = payPwd.substr(0, 6);
				$.ajax({
					type: 'post',
					dataType: 'json',
					url: '/order/pay-wallet',
					data: {
						payPwd: payPwd,
						orderNo: order.orderNo
					},
					success: function (data) {
						if (0 == data.status) {
							location.replace('/_common/result?data=' + JSON.stringify(that.result.paySuccess(order)));
						} else {
							var msg = data.msg || B.tips.networkError;
							$('.toolbar .password-wrap .password').val('');
							$('.toolbar .password-wrap .word').removeClass('filled');
							B.topWarn(msg);
						}
					},
					error: function (jqXHR, textStatus, errorThrown) {
						$('.toolbar .password-wrap .password').val('');
						$('.toolbar .password-wrap .word').removeClass('filled');
						B.topWarn(B.tips.networkError);
					}
				});
			}
		});
	},
	// 在线支付
	payOnline: function (order, payWay) {
		var that = this;
		$.ajax({
			type: 'post',
			dataType: 'json',
			url: '/_common/cash/recharge',
			data: {
				money: order.money,
				type: payWay.type,
				code: payWay.code,
				successUrl: location.host + '/_common/result?data=' + JSON.stringify(that.result.paySuccess(order)),
				failUrl: location.host + '/_common/result?data=' + JSON.stringify(that.result.payFail(order)),
				orderIds: order.orderId
			},
			success: function (data) {
				if (0 == data.status) {
					$('.toolbar').append('<form id="payForm" method="POST"></form>');
					for (var key in data.data) {
						$('#payForm').append('<input type="hidden" name="' + key + '" value="' + data.data[key] + '">');
					}
					$('#payForm').attr('action', data.url);
					$('#payForm').submit();
				} else {
					var msg = data.msg || B.tips.networkError;
					B.topWarn(msg);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				B.topWarn(B.tips.networkError);
			}
		});
	}
}