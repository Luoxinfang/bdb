/**
 * @author chenzhenhua
 * @createTime 2015-12-28
 * @description 订单评价
 */

var B = require('_common:js/bdb/core.js');
var Order = require('cus:widget/order/order.js');

module.exports = {
	init: function () {
		this.event();
	},
	comment: function (e) {
		var orderNo = $('.order').data('orderNo');
		var data = [];
		var serviceStar = $('input[name="serviceStar"]:checked').val();
		var sendStar = $('input[name="sendStar"]:checked').val();
		$('.orderItem').each(function () {
			var orderItem = {};
			orderItem.orderitemid = $(this).data('orderItemId');
			orderItem.rate = $(this).find('input[type="radio"][name="' + orderItem.orderitemid + '"]:checked').val();
			orderItem.comment = $(this).find('textarea[name="' + orderItem.orderitemid + '"]').val();
			data.push(orderItem);
		})
		$.ajax({
			type: 'put',
			dataType: 'json',
			url: '/order/comment',
			data: {
				orderNo: orderNo,
				data: data,
				serviceStar: serviceStar,
				sendStar: sendStar
			},
			success: function (data) {
				if (0 == data.status) {
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
					var msg = data.msg || B.tips.networkError;
					B.topWarn(msg);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				B.topWarn(B.tips.networkError);
			}
		});
	},
	readFile: function (e) {
		var $this = $(e.currentTarget);
		var reader = new FileReader();
		for(file in e.files){
			reader.readAsDataURL(file);
			reader.onload = function(e){
				$this.parent().parent().prepend('<a class="icon-add btn-file"><input type="file" class="file" accept="image/*" multiple></a>');
				$this.parent().parent().css('background-image', 'url(' + this.result + ')');
			}
		}
	},
	event: function () {
		$('.commentOrder').on('click', this.comment.bind(this));
		$('.orderItem').on('change', 'input.file', this.readFile.bind(this));
	}
}
