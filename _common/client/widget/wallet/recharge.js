/**
 * @author chenzhenhua
 * @createTime 2015/12/21
 * @description 处理充值页面的路由
 */

var B = require('_common:js/bdb/core.js');
module.exports = {
	init: function () {
		this.event();
	},
	changeState: function (e) {
		var $this = $(e.currentTarget);
		if ('' == $this.val()) {
			$('#pay').addClass('btn-disabled');
		} else {
			$('#pay').removeClass('btn-disabled');
		}
	},
	pay: function () {
		$.ajax({
			type: 'post',
			dataType: 'json',
			url: '/_common/cash/recharge',
			data: {
				money: parseFloat($('input[name="money"]').val()),
				type: 4,
				code: 2,
				successUrl: location.host+'/_common/result?data={"type":"success","header":{"title":"充值"},"content":{"tit":"支付成功","msg":"充值,3秒后自动跳转到充值记录..."},"btn":{"href":"/wallet/trans-list?tradeType=6001","txt":"充值记录"},"autoJump":true}',
				failUrl: location.host+'/_common/result?data={"type":"error","header":{"title":"充值"},"content":{"tit":"支付失败","msg":"抱歉，支付失败，3秒后自动返回到充值页面..."},"btn":{"href":"/wallet/recharge","txt":"继续充值"},"autoJump":true}'
			},
			success: function (data) {
				if (0 == data.status) {
					for(var key in data.data){
						$('#payForm').append('<input type="hidden" name="'+key+'" value="'+data.data[key]+'">');
					}
					$('#payForm').attr('action',data.url);
					$('#payForm').submit();
				} else {
					var msg = data.msg || '服务器异常，请稍后再试';
					$('#pay').removeClass('btn-disabled');
					B.topWarn(msg);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				$('#pay').removeClass('btn-disabled');
				B.topWarn('服务器异常，请稍后再试');
			}
		});
	},
	event: function () {
		$('.page>.content').on('input propertychange', 'input[name="money"]', this.changeState.bind(this));
		$('.page>.content').on('click', '#pay:not(.btn-disabled)', this.pay.bind(this));
		if ('' != $('input[name="money"]').val()) {
			$('#pay').removeClass('btn-disabled');
		}
	}
}
