/**
 * @author radish.
 */
var B = require('_common:js/bdb/core.js');

module.exports = {
	init: function () {
		this.event();
	},
	//设置托管竞价
	setData: function () {

		//修改个人信息
		$.ajax({
			type: 'post',
			dataType: 'json',
			url: '/_common/user/user-set',
			data: {
				touserid: 1,
				productcode:1,
				maxvalue:100
			},
			success: function (data) {
				if (0 == data.status) {
					window.location.href = '/user/personal';
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
		/*$("#pai").on('click',this.setData.bind(this));*/
	}
};
