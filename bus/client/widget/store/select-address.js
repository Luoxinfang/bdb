/**
 * @author pulang.
 */
var B = require('_common:js/bdb/core.js');

module.exports = {
	init: function () {
		this.updateInfo();
		this.event();
	},
	//修改身份和城市
	updateInfo: function () {
		$('.page>.content').on('change', '.input-wrap select', function () {
			$(this).parent().find('[data-role="input"]').html($(this).val());
		});
	},
	//修改店铺地址信息
	updateAdress: function () {
    var province = $("#province").val();
		var city = $("#city").val();
    var street = $("#street").val();
		var address = province+'省'+city+'市'+street;
		$.ajax({
			type: 'post',
			dataType: 'json',
			url: '/store/store',
			data: {
				province:province,
				city:city,
				street:street,
				address:address
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
