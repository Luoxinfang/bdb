/**
 * @author radish.
 */
var B = require('_common:js/bdb/core.js');

module.exports = {
	init: function () {
		this.event();
	},
	//报名参加平台活动
	updateData: function () {
		var id =	$('#activityid').val();
		$.ajax({
			type: 'post',
			dataType: 'json',
			url: '/_common/activity/join',
			data: {
				id:id
			},
			success: function (data) {
				if (0 == data.status) {
					window.location.href = '/activity/bdb-activity';
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
		$(".page > .content").on('click','#btn-join',this.updateData.bind(this));
	}
};
