/**
 * @author pulang
 * @createTime 2015-12-18
 * @description 这个路由处理地址信息的请求
 */

var B = require('_common:js/bdb/core.js');

module.exports = {
	init: function () {
		this.event();
	},
	//修改用户个人信息
	updateData: function () {
		var sex = $("#sex").val();
		//修改个人信息
		$.ajax({
			type: 'put',
			dataType: 'json',
			url: '/_common/user/user-info',
			data: {
				nickname: sex
			},
			success: function (data) {
				if (0 == data.status) {
					/*console.log('asd');*/
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
		$('.body-container').on('change','#sex',this.updateData.bind(this));
	}
};
