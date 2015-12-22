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
	//修改设置
	updateSet: function () {
		var msg = 0;
		var sound = 0;
		var shock = 0;
		var disturb = 0;
		var staTime = $("#staTime").val();
		var endTime = $("#endTime").val();
		if(!$('#info').is(':checked')){
			 msg=1;
		}
		if(!$('#sound').is(':checked')){
			 sound=1;
		}
		if(!$('#shock').is(':checked')){
			 shock=1;
		}
		if(!$('#disturb').is(':checked')){
			 disturb=1;
		}
		$.ajax({
			type: 'put',
			dataType: 'json',
			url: '/_common/settings/sys-set',
			data: {
				msgflag: msg,
				soundflag: sound,
				shockflag: shock,
				allflag: disturb,
				begtime:staTime,
				endtime:endTime
			},
			success: function (data) {
				if (0 == data.status) {

				} else {
					B.topWarn(data.msg);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				B.topWarn(B.tips.networkError);
			}
		});
	},
	event: function () {
		$(".page>.content").on('change', '#info', this.updateSet.bind(this));
		$(".page>.content").on('change', '#sound', this.updateSet.bind(this));
		$(".page>.content").on('change', '#shock', this.updateSet.bind(this));
		$(".page>.content").on('change', '#disturb', this.updateSet.bind(this));
		/*$(".page>.content").on('change', '#update-info', this.updateSet.bind(this));*/
	}
};