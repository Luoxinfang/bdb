/**
 * Created by pulang on 2015/12/28.
 */
var B = require('_common:js/bdb/core.js');

module.exports = {
	init: function () {
		this.event();
	},
	//提交投诉或建议
	submitInfo: function () {
		var comment = $('#problem').val();

		$.ajax({
			type: 'post',
			dataType: 'json',
			url: '/_common/settings/suggestions',
			data: {
				comment:comment
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
		$(".page>.content").on('click', '#btn-submit', this.submitInfo.bind(this));

	}
};