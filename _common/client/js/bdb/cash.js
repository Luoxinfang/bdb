/**
 * Created by chenzhenhua on 2015/12/19.
 * 支付密码类库
 */

var B = require('_common:js/bdb/core.js');
module.exports = {
	validPayPwd: function (args) {
		var payPwd = args.payPwd;
		var success = args.success;
		var error = args.error;
		$.ajax({
			type: 'get',
			dataType: 'json',
			url: '/_common/cash/pwd',
			data: {
				payPwd: payPwd
			},
			success: function (data) {
				success(data);
			},
			error: function (jqXHR, textStatus, errorThrown) {
				error(jqXHR, textStatus, errorThrown);
			}
		});
	},
	opsAccount: function(args){
		var payPwd = args.payPwd;
		var success = args.success;
		var error = args.error;
		$.ajax({
			type: 'post',
			dataType: 'json',
			url: '/_common/cash/ops-account',
			data: {
				payPwd: payPwd
			},
			success: function (data) {
				success(data);
			},
			error: function (jqXHR, textStatus, errorThrown) {
				error(jqXHR, textStatus, errorThrown);
			}
		});
	}
}