/**
 * @description 找回密码
 */
var B = require('_common:js/bdb/core.js');

module.exports = {
	init: function () {
		this.$next = $('#btn-next');
		this.$getCode = $('#btn-code');
		this.$form1 = $('#form1');
		this.$form2 = $('#form2');
		this.$form3 = $('#form3');
		this.$result = $('#result');
		this.mobile = $('#tel').data('value');
		this.code = null;
		this.loginPwd = null;
		this.sign = null;
		this.newPayPwd1 = null;
		this.newPayPwd2 = null;
		this.updateCode();
		this.updateLoginPwd();
		this.hashChange();
		this.event();
	},
	//获取验证码
	getCode: function () {
		var that = this;
		that.disableGetCode.bind(that)();
		$.ajax({
			type: 'get',
			dataType: 'json',
			url: '/_common/acc/sms',
			data: {
				session: 'session',
				number: that.mobile
			},
			success: function (data) {
				if (0 == data.status) {
					that.disableGetCode.bind(that)();
				} else if ('redirect' == data.status) {
					B.alert('登录失效', '2秒后跳转至登录页面...', 'error', 2000, function () {
						location.href = data.url;
					});
				} else {
					B.topWarn(data.msg);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				B.topWarn(B.tips.networkError);
			}
		});
	},
	//禁用获取验证码按钮
	disableGetCode: function () {
		this.$getCode.addClass('btn-disabled');
		var timeEnd = 59;
		var timeRunner = setInterval(function () {
			this.$getCode.text(timeEnd + '秒');
			timeEnd--;
			if (timeEnd == 0) {
				clearInterval(timeRunner);
				this.$getCode.text('获取验证码').removeClass('btn-disabled');
			}
		}.bind(this), 1000);
	},
	//更新验证码
	updateCode: function () {
		var $dom = $('#code');
		var val = $dom.val();
		if (val.length === 6) {
			this.code = val;
		} else {
			this.code = null;
		}
		this.toggleSubmitBtn();
	},
	//检查验证码
	checkCode: function () {
		var $dom = $('#code');
		var val = $dom.val();
		if (val.length !== 6) {
			B.topWarn('请输入6位的验证码');
		}
		this.toggleSubmitBtn();
	},
	//更新登录密码
	updateLoginPwd: function () {
		var $dom = $('#loginPwd');
		var val = $dom.val();
		this.loginPwd = val;
		this.toggleSubmitBtn();
	},
	//检查登录密码
	checkLoginPwd: function () {
		var $dom = $('#loginPwd');
		var val = $dom.val();
		if (!val) {
			B.topWarn('请输入登录密码');
		}
	},
	//下一步
	next: function () {
		var that = this;
		$.ajax({
			type: 'get',
			dataType: 'json',
			url: '/_common/user/forget-paypwd',
			data: {
				userName: that.mobile,
				code: that.code,
				passPwd: that.loginPwd
			},
			success: function (data) {
				if (data.status == 0) {
					location.hash = '#step2';
					that.sign = true;
				} else {
					B.topWarn(data.msg);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				B.topWarn(B.tips.networkError);
			}
		});
	},
	//第一次输入新字符密码
	step2: function (e) {
		var that = this;
		var $this = $(e.currentTarget);
		if ($this.val().length >= 6) {
			that.newPayPwd1 = $this.val().substr(0, 6);
			location.hash = '#step3';
		}
	},
	//第一次输入新字符密码
	step3: function (e) {
		var that = this;
		var $this = $(e.currentTarget);
		if ($this.val().length >= 6) {
			that.newPayPwd2 = $this.val().substr(0, 6);
			if (that.newPayPwd1 == that.newPayPwd2) {
				$.ajax({
					type: 'post',
					dataType: 'json',
					url: '/_common/user/forget-paypwd',
					data: {
						userName: that.mobile,
						code: that.code,
						passPwd: that.loginPwd,
						newPwd: that.newPayPwd1
					},
					success: function (data) {
						if (data.status == 0) {
							location.hash = '#result';
						} else {
							B.topWarn(data.msg);
						}
					},
					error: function (jqXHR, textStatus, errorThrown) {
						B.topWarn(B.tips.networkError);
					}
				});
			} else {
				B.topWarn('两次支付密码不一致，请重新输入！');
				location.hash = '#step2';
			}
		}
	},
	//切换提交按钮的状态
	toggleSubmitBtn: function () {
		if (this.code && this.loginPwd) {
			this.$next.removeClass('btn-disabled');
		} else {
			this.$next.addClass('btn-disabled');
		}
	},
	//hash变化
	hashChange: function () {
		if (!this.sign) {
			location.hash = ''
		}
		if (location.hash == '#step2') {
			this.$form1.hide();
			this.$form2.find('.password-wrap .word').removeClass('filled');
			this.$form2.find('.password-wrap .password').val('');
			this.$form2.show();
			this.$form2.find('.password-wrap .word').removeClass('filled');
			this.$form2.find('.password-wrap .password').val('');
			this.$form3.hide();
			this.$result.hide();
		} else if (location.hash == '#step3') {
			this.$form1.hide();
			this.$form2.find('.password-wrap .word').removeClass('filled');
			this.$form2.find('.password-wrap .password').val('');
			this.$form2.hide();
			this.$form3.find('.password-wrap .word').removeClass('filled');
			this.$form3.find('.password-wrap .password').val('');
			this.$form3.show();
			this.$result.hide()
		} else if (location.hash == '#result') {
			this.$form1.hide();
			this.$form2.find('.password-wrap .word').removeClass('filled');
			this.$form2.find('.password-wrap .password').val('');
			this.$form2.hide();
			this.$form3.find('.password-wrap .word').removeClass('filled');
			this.$form3.find('.password-wrap .password').val('');
			this.$form3.hide();
			this.$result.show();
		} else {
			this.$form1.show();
			this.$form2.find('.password-wrap .word').removeClass('filled');
			this.$form2.find('.password-wrap .password').val('');
			this.$form2.hide();
			this.$form3.find('.password-wrap .word').removeClass('filled');
			this.$form3.find('.password-wrap .password').val('');
			this.$form3.hide();
			this.$result.hide()
		}
	},
	event: function () {
		this.$form1.on('click', '#btn-code:not(.btn-disabled)', this.getCode.bind(this));
		$('#code').on('keyup', this.updateCode.bind(this));
		$('#code').on('blur', this.checkCode.bind(this));
		$('#loginPwd').on('keyup', this.updateLoginPwd.bind(this));
		$('#loginPwd').on('blur', this.checkLoginPwd.bind(this));
		$('#newPayPwd1').on('input change propertychange', this.step2.bind(this));
		$('#newPayPwd2').on('input change propertychange', this.step3.bind(this));
		this.$next.on('click', this.next.bind(this));
		window.onhashchange = this.hashChange.bind(this);
	}
};