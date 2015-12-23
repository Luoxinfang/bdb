/**
 * @description 找回密码
 */
var B = require('_common:js/bdb/core.js');

module.exports = {
	init: function () {
		this.$submit = $('#btn-submit');
		this.$next = $('#btn-next');
		this.$getCode1 = $('#getMessage1');
		this.$getCode2 = $('#getMessage2');
		this.$form1 = $('#form1');
		this.$form2 = $('#form2');
		this.pwd = null;
		this.message1 = null;
		this.message2 = null;
		this.oldtel = $("#old_tel").val();
		this.newtel = null;
		this.updateNumber();
		/*this.updateCode();*/
		this.event();
	},
	//获取验证码
	getCode: function () {
		var that = this,
				number = $('#old_tel').val();
		$.ajax({
			type: 'get',
			dataType: 'json',
			url: '/_common/acc/sms',
			data: {
				number: number
			},
			success: function (data) {
				if (0 == data.status) {
					that.number = data.number;
					that.disableGetCode.bind(that)();
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
		var code = null;
		if(this.$getCode2){
			code=this.$getCode2;
			this.$getCode2.addClass('btn-disabled');
			this.lowtime(code);
		}else{
			code=this.$getCode1;
			this.$getCode1.addClass('btn-disabled');
			this.lowtime(code);
		}
	},
	//倒计时的方法
	lowtime: function (code) {
		var timeEnd = 59;
		var timeRunner = setInterval(function () {
			code.text(timeEnd + '秒');
			timeEnd--;
			if (timeEnd == 0) {
				clearInterval(timeRunner);
				code.text('获取验证码').removeClass('btn-disabled');
			}
		}.bind(this), 1000);
	},
	//输入验证码
	updateCode: function () {
		var $dom = $('#message');
		var $new = $('#new-message');
		 if($new.val()!=null&&$new.val().length === 6) {
			 this.message2 = $new.val();
		 }else if($dom.val()!=null&&$dom.val().length ===6) {
			 this.message1 = $dom.val();
		 }else {
			 this.message1 = null;
			 this.message2 = null;
		 }
		this.toggleNextBtn();
	},
	//检查验证码
	checkCode: function () {
		var $dom = $('#message');
		var $new = $('#new-message')
		var oldval = $dom.val();
		var newval = $new.val();
		if (oldval!='' && oldval.length !== 6) {
			B.topWarn('请输入6位的验证码');
		}else if(newval!='' && newval.length !== 6) {
			B.topWarn('请输入6位的验证码');
		}
		this.toggleNextBtn();
	},
	//更新密码
	updatePwd: function () {
		var $dom = $('#pwd');
		var val = $dom.val();
		var rs = B.isPwd(val);
		if (rs.status) {
			this.pwd = val;
		} else {
			this.pwd = null;
		}
		this.toggleNextBtn();
	},
	//检查密码
	checkPwd: function () {
		var $dom = $('#pwd');
		var val = $dom.val();
		var rs = B.isPwd(val);
		if (!rs.status) {
			B.topWarn(rs.msg);
		}
		this.toggleNextBtn();
	},
	//切换下一步按钮的状态
	toggleNextBtn: function () {
		if (this.oldtel && this.message1 && this.pwd) {
			this.$next.removeClass('btn-disabled');
		} else {
			this.$next.addClass('btn-disabled');
		}
	},
	//切换完成按钮的状态
	toggleSubmitBtn: function () {
		if (this.newtel && this.message2) {
			this.$submit.removeClass('btn-disabled');
		} else {
			this.$submit.addClass('btn-disabled');
		}
	},
	//输入新的手机号码
	updateNumber: function () {
		var $dom = $('#new-tel');
		var val = $dom.val();
		var rs = B.isMobilePhone(val);
		if (rs.status) {
			this.newtel = val;
			this.$getCode2.removeClass('btn-disabled');
		} else {
			this.newtel = null;
			this.$getCode2.addClass('btn-disabled');
		}
		this.toggleNextBtn();
	},
	//检查手机号码
	checkNumber: function () {
		var $dom = $('#new-tel');
		var val = $dom.val();
		var rs = B.isMobilePhone(val);
		if (!rs.status) {
			B.topWarn(rs.msg);
		}
		if(this.oldtel==val){
			B.topWarn('旧手机号和新手机号不能相同');
		}
	},
	//请求更换手机号
	submit: function () {
		var that = this;
		$.ajax({
			type: 'put',
			dataType: 'json',
			url: '/_common/user/user-info',
			data: {
				mobile: that.oldtel,
				code: that.message1,
				passwd: that.pwd,
				newmobile: that.newtel,
				newcode:that.message2
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
	//hash变化
	hashChange: function () {
			this.$form1.hide();
			this.$form2.show();
	},
	event: function () {
		$('#getMessage1').on('click', this.getCode.bind(this));
		$('#getMessage2').on('click', this.getCode.bind(this));
		$('#content').on('click', '#btn-next:not(.btn-disabled)', this.hashChange.bind(this));
		$('#message').on('keyup', this.updateCode.bind(this));
		$('#message').on('blur', this.checkCode.bind(this));
		$('#pwd').on('keyup', this.updatePwd.bind(this));
		$('#pwd').on('blur', this.checkPwd.bind(this));
		$('#new-tel').on('keyup', this.updateNumber.bind(this));
		$('#new-tel').on('blur', this.checkNumber.bind(this));
		$('#new-message').on('keyup', this.updateCode.bind(this));
		$('#new-message').on('blur', this.checkCode.bind(this));
		this.$submit.on('click', this.submit.bind(this));
	}
};