/**
 * @author radish.
 */
var B = require('_common:js/bdb/core.js');

module.exports = {
	init: function () {
		this.event();
	},
	//修改用户个人信息
	updateData: function () {
		var nickname = '';
		var sex = '';
		var qq = '';
		var updateVal = $('#update-name').val(),
				title = $(".header .center").text();
		if(title == "修改呢称"){
			nickname = updateVal;
		}else if(title == "修改QQ号"){
			sex = updateVal;
		}
		//修改个人信息
		$.ajax({
			type: 'put',
			dataType: 'json',
			url: '/_common/user/user-info',
			data: {
				nickname: nickname,
				sex:sex,
				qq:qq
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
		$(".header .rightText").on('click', this.updateData.bind(this));

	}
};
