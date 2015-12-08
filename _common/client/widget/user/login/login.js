/**
 * @author radish.
 */

module.exports = {
	init: function () {
		var userIdRemembered = $.cookie.set('user_id_remembered');
		if (userIdRemembered) {
			$('#username').val(userIdRemembered);
		}
		this.event();
	},
	//用户登录
	login: function (e) {
		e && e.preventDefault();
		var that = this,
				userName = $('#user-name').val(),
				password = $('#user-pwd').val(),
				rememberMe = $('#rem-me').prop('checked'),
				captcha = $('#captcha').val(),
				$tip = $('.login-layer .tip');
		if (!userName) {
			$tip.show().html('用户名不能为空！');
			return false;
		}
		if (!password) {
			$tip.show().html('密码不能为空！');
			return false;
		}
		$tip.hide();
		//向后台提交数据
		$.ajax({
			type: 'post',
			dataType: 'json',
			url: '/common/session',
			data: {
				userName: userName,
				password: password,
				captcha: captcha
			},
			success: function (data) {
				if ('00000' === data.status) {
					if (rememberMe) {
						$.cookie.set('user_id_remembered', userName);
					} else {
						$.cookie.set('user_id_remembered', null);
					}
					window.location.href = '/';
				} else {
					var msg = data.exception || '服务器异常，请稍后再试';
					$tip.html(msg).show();
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
