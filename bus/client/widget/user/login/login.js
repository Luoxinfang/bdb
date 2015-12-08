/**
 * Created by luoxinfang on 15/9/6.
 */

var H = require('common:js/hz-lib/hz.js');
module.exports = {
	init: function () {
		if (this.getLoginErrorTime() > 2) {
			this.showCaptcha();
		}
		var userIdRemembered = $.cookie('user_id_remembered');
		if (userIdRemembered) {
			$('#user-name').val(userIdRemembered);
		}
		this.event();
	},
	//获取登陆错误的次数
	getLoginErrorTime: function () {
		return +$.cookie('login_error_times');
	},
	//显示验证码
	showCaptcha: function () {
		var url = '/shortcut/verify_code?' + (+new Date());
		$('.login-layer').find('.code-con').prop('src', url);
		$('.login-layer').find('.verify-item').show();
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
		if (that.getLoginErrorTime() > 2 && !captcha) {
			$tip.show().html('请输入验证码！');
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
					var target = H.util.getParameter('target');
					if (rememberMe) {
						$.cookie('user_id_remembered', userName);
					} else {
						$.cookie('user_id_remembered', null);
					}
					if (target) {
						target = decodeURIComponent(target);
					} else {
						target = '/manage';
					}
					window.location.href = target;
				} else {
					var msg = data.exception || '服务器异常，请稍后再试';
					$tip.html(msg).show();
					if (that.getLoginErrorTime() >= 2) {
						that.showCaptcha();
					}
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				$tip.html('服务器异常，请稍后再试').show();
			}
		});
	},
	//更新验证码
	updateCaptcha: function () {
		var url = '/shortcut/verify_code?' + (+new Date());
		$('.code-con').attr('src', url);
	},
	event: function () {
		$('#btn-login').on('click', $.proxy(this.login, this));
		$('.refresh-captcha,.code-con').on('click', this.updateCaptcha)
	}
};
