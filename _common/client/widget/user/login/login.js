/**
 * @author radish.
 */
var B = require('_common:js/bdb/core.js');
module.exports = {
	init: function () {
		var userIdRemembered = $.cookie.get('user_id_remembered');
		if (userIdRemembered) {
			$('#username').val(userIdRemembered);
		}
		this.event();
	},
	//用户登录
	login: function (e) {
		e && e.preventDefault();
		var that = this,
				userName = $('#username').val(),
				password = $('#user-pwd').val(),
				rememberMe = $('#rem-me').prop('checked'),
				captcha = $('#captcha').val(),
				$tip = $('.login-layer .tip');
		if (!userName) {
			B.topWarn('用户名不能为空!');
			return false;
		}
		if (!password) {
			B.topWarn('密码不能为空!');
			return false;
		}
		$tip.hide();
		//向后台提交数据
		$.ajax({
			type: 'post',
			dataType: 'json',
			url: '/_common/session',
			data: {
				uname: userName,
				pwd: password
			},
			success: function (data) {
				if (0 == data.status) {
					if (rememberMe) {
						$.cookie.set('user_id_remembered', userName);
					} else {
						$.cookie.set('user_id_remembered', null);
					}
					window.location.href = '/';
				} else {
					var msg = data.msg || '服务器异常，请稍后再试';
					B.topWarn(msg);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				$tip.html('服务器异常，请稍后再试').show();
			}
		});
	},
	event: function () {
		$('#btn-login').on('click', $.proxy(this.login, this));
	}
};
