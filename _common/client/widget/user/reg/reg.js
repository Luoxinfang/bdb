/**
 * @description
 */
var B = require('_common:js/bdb/core.js');

module.exports = {
  init: function () {
    this.$submit = $('#btn-submit');
    this.$getCode = $('#btn-get-code');
    this.pwd = null;
    this.code = null;
    this.number = null;
    this.event();
  },
  //获取验证码
  getCode: function () {
    var that = this,
      number = $('#tel').val();
    $.ajax({
      type: 'get',
      dataType: 'json',
      url: '_common/reg/sms',
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
  //更新手机号码
  updateNumber: function () {
    var $dom = $('#tel');
    var val = $dom.val();
    var rs = B.isMobilePhone(val);
    if (rs.status) {
      this.number = val;
      this.$getCode.removeClass('btn-disabled');
    } else {
      this.number = null;
      this.$getCode.addClass('btn-disabled');
      $dom.focus();
      B.topWarn(rs.msg);
    }
    this.toggleSubmitBtn();
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
      $dom.focus();
      B.topWarn(rs.msg);
    }
    this.toggleSubmitBtn();
  },
  //更新验证码
  updateCode: function () {
    var $dom = $('#code');
    var val = $dom.val();
    if (val.length === 6) {
      this.code = val;
    } else {
      this.code = null;
      $dom.focus();
      B.topWarn('请输入6位的验证码');
    }
    this.toggleSubmitBtn();
  },
  //提交
  submit: function () {
    var that = this;
    $.ajax({
      type: 'post',
      dataType: 'json',
      url: '_common/reg/reg',
      data: {
        uName: that.number,
        pwd: that.pwd,
        code: that.code
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
  //切换提交按钮的状态
  toggleSubmitBtn: function () {
    if (this.number && this.pwd && this.code) {
      this.$submit.removeClass('btn-disabled');
    } else {
      this.$submit.addClass('btn-disabled');
    }
  },
  event: function () {
    $('#content').on('click','#btn-get-code:not(.btn-disabled)',
      this.getCode.bind(this));
    $('#tel').on('keyup', this.updateNumber.bind(this));
    $('#pwd').on('keyup', this.updatePwd.bind(this));
    $('#code').on('keyup', this.updateCode.bind(this));
    this.$submit.on('click', this.submit.bind(this));
  }
};