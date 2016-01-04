/**
 * @author chenzhenhua
 * @createTime 2015-12-28
 * @description 订单评价
 */

var B = require('_common:js/bdb/core.js');
var Order = require('cus:widget/order/order.js');

module.exports = {
	init: function () {
		B.bindAddImage(9);
		this.event();
	},
	comment: function (e) {
		var before = +new Date();
		var timer = setTimeout(function () {
			B.alert({
				title: '数据提交中...',
				icon: 'loading',
				time: false
			});
		}, 400);
		var orderNo = $('.order').data('orderNo');
		var datas = [];
		var qualityStar = $('input[name="qualityStar"]:checked').val();
		var serviceStar = $('input[name="serviceStar"]:checked').val();
		var sendStar = $('input[name="sendStar"]:checked').val();
		$('.orderItem').each(function () {
			var orderItem = {};
			var imgUrls = [];
			orderItem.orderitemid = $(this).data('orderItemId');
			orderItem.comment = $(this).find('textarea[name="' + orderItem.orderitemid + '"]').val();
			orderItem.satisFactionStar = $(this).find('input[type="radio"][name="' + orderItem.orderitemid + '"]:checked').val();
			$(this).find('.icon-add.has-img').each(function () {
				var imgBase64 = $(this).css('background-image');
				imgBase64 = imgBase64.substring(4, imgBase64.length - 1);
				var data = B.uploadImage({
					img: imgBase64
				});
				if (0 == data.status) {
					imgUrls.push(data.path);
				} else {
					var msg = data.msg || B.tips.networkError;
					B.topWarn(msg);
					return false;
				}
			});
			orderItem.imageUrl = imgUrls.join(',');
			datas.push(orderItem);
		})
		$.ajax({
			type: 'put',
			dataType: 'json',
			url: '/order/comment',
			data: {
				orderNo: orderNo,
				data: JSON.stringify(datas),
				qualityStar: qualityStar,
				serviceStar: serviceStar,
				sendStar: sendStar
			},
			success: function (data) {
				var after = +new Date();
				if (before + 400 > after) {
					clearTimeout(timer);
				}
				if (0 == data.status) {
					B.clearAlert();
					B.alert({
						icon: 'success',
						title: '评价成功',
						content: '2秒后返回订单列表页...',
						time: 2000,
						callback: function () {
							location.replace('/order/list');
						}
					});
				} else {
					B.clearAlert();
					var msg = data.msg || B.tips.networkError;
					B.topWarn(msg);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				var after = +new Date();
				if (before + 400 > after) {
					clearTimeout(timer);
				}
				B.clearAlert();
				B.topWarn(B.tips.networkError);
			}
		});
	},
	event: function () {
		$('.commentOrder').on('click', this.comment.bind(this));
	}
}
