/**
 * @author pulang.
 */
var B = require('_common:js/bdb/core.js');

module.exports = {
	init: function () {
		this.event();
	},
	//修改店铺地址信息
	updateAddress: function () {
		var kindscode1 = '';
		var kindscode2 = '';
		var kindscode3 = '';
		var kindscode4 = '';
		var kindscode5 = '';
		var kindscode6 = '';
		var kindscodes = '';
		if ($("#emerald").prop('checked')) {
			kindscode1 = '1';
		}
		if ($("#wenwan").prop('checked')) {
			kindscode2 = '2';
		}
		if ($("#metal").prop('checked')) {
			kindscode3 = '3';
		}
		if ($("#caiBao").prop('checked')) {
			kindscode4 = '4';
		}
		if ($("#ornaments").prop('checked')) {
			kindscode5 = '5';
		}
		if ($("#crystal").prop('checked')) {
			kindscode6 = '6';
		}
		kindscodes = kindscode1+'#'+kindscode2+'#'+kindscode3+'#'+kindscode4+'#'+kindscode5+'#'+kindscode6;
		$.ajax({
			type: 'post',
			dataType: 'json',
			url: '/store/store',
			data: {
				kindscode: kindscodes
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
		$(".page>.footer").on('click','#btn-complete',this.updateAddress.bind(this));
	}
};
