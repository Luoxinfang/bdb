/**
 * @description 推送设置
 */
var B = require('_common:js/bdb/core.js');

module.exports = {
	init: function () {
		this.updateTime();
		this.event();
	},
	//修改开始时间和结束时间
	updateTime: function () {
		$('.page>.content').on('input propertychange', '.input-wrap input', function () {
			$(this).parent().find('[data-role="input"]').html($(this).val());
		});
	},
	//新增店铺活动
	addActivity: function () {
		var name = $('#name').val();
		var info = $('#info').val();
		var staTime = $('#staTime').val();
		var endTime = $('#endTime').val();
		$.ajax({
			type: 'post',
			dataType: 'json',
			url: '/_common/activity/add',
			data: {
				activename:name,
				begtime:staTime,
				Endtime:endTime,
				Desc:info,
				imgurl:''
			},
			success: function (data) {
				if (0 == data.status) {
					window.location.href = '/activity/store-activity';
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
		$(".page>.content").on('click', '#btn-complete', this.addActivity.bind(this));
	}
};