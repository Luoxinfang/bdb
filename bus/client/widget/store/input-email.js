/**
 * @author pulang.
 */
var B = require('_common:js/bdb/core.js');

module.exports = {
	init: function () {
		this.event();
	},
	//修改店铺地址信息
	updateAdress: function () {
		var email = $("#email").val();
		$.ajax({
			type: 'post',
			dataType: 'json',
			url: '/store/store',
			data: {
				email:email
			},
			success: function (data) {
				if (0 == data.status) {
					window.location.href = '/store/manage';
				} else {
					var msg = data.msg || '服务器异常，请稍后再试';
					B.topWarn(msg);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				B.topWarn('服务器异常，请稍后再试');
			}
		});
	},
	event: function () {
		$(".page>.content").on('click','#btn-complete', this.updateAdress.bind(this));
	}
};
