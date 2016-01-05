/**
 * @author chenzhenhua
 * @createTime 2015-12-28
 * @description 订单评价
 */

var B = require('_common:js/bdb/core.js');
var Order = require('cus:widget/order/order.js');

module.exports = {
	init: function () {
		this.$comment = $('textarea[name="comment"]');
		this.$complain = $('#complain');
		this.$order = $('#order');
		B.bindAddImage(9);
		this.changeState();
		this.event();
	},
	changeState: function () {
		var that = this;
		if ('' == that.$comment.val().replace(/[ \r\n]/g, "")) {
			that.$complain.addClass('btn-disabled');
		} else {
			that.$complain.removeClass('btn-disabled');
		}
	},
	complain: function () {
		var that = this;
		var before = +new Date();
		var timer = setTimeout(function () {
			B.alert({
				title: '数据提交中...',
				icon: 'loading',
				time: false
			});
		}, 400);
		var orderNo = that.$order.data('orderNo'),
			orderItemId = that.$order.data('orderItemId'),
			touserId = that.$order.data('touserId'),
			comment = that.$comment.val(),
			imgUrls = [];
		$('.icon-add.has-img').each(function () {
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
		$.ajax({
			type: 'put',
			dataType: 'json',
			url: '/order/complain',
			async: false,
			data: {
				orderNo: orderNo,
				orderItemId: orderItemId,
				type: 0,
				comment: comment,
				touserId: touserId,
				imgUrl: imgUrls.join(',')
			},
			success: function (data) {
				var after = +new Date();
				if (before + 400 > after) {
					clearTimeout(timer);
				}
				B.clearAlert();
				if (0 == data.status) {
					var result = {
						type: 'warn', header: {
							title: '我的订单'
						}, content: {
							tit: '第三方介入申请成功，请等待处理！',
							msg: '处理结果会以短信的方式通知您，请注意查收！'
						}, btn: {
							href: 'javascript:history.back();',
							txt: '完成'
						}
					};
					location.replace('/_common/result?data=' + JSON.stringify(result));
				} else {
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
		$('textarea[name="comment"]').on('input propertychange', this.changeState.bind(this));
		$('.page>.content').on('click', '#complain:not(.btn-disabled)', this.complain.bind(this));
	}
}
