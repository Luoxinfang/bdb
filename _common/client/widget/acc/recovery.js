/**
 * @description 找回密码
 */
var B = require('_common:js/bdb/core.js');

module.exports = {
  init: function () {
    this.$submit = $('#btn-submit');
    this.$next = $('#btn-next');
    this.$getCode = $('#btn-code');
    this.$form1 = $('#form1');
    this.$form2 = $('#form2');
    this.pwd = null;
    this.code = null;
    this.number = null;
    this.identity = null;
    this.updateNumber();
    this.updateCode();
    this.updateIdentityCode();
    this.event();
  },
  //获取验证码
  getCode: function () {
    var that = this,
        number = $('#tel').val();
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
    }
    this.toggleSubmitBtn();
  },
  //检查手机号码
  checkNumber: function () {
    var $dom = $('#tel');
    var val = $dom.val();
    var rs = B.isMobilePhone(val);
    if (!rs.status) {
      B.topWarn(rs.msg);
    }
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
    this.toggleSubmitBtn();
  },
  //检查密码
  checkPwd: function () {
    var $dom = $('#pwd');
    var val = $dom.val();
    var rs = B.isPwd(val);
    if (!rs.status) {
      B.topWarn(rs.msg);
    }
  },
  //更新身份证
  updateIdentityCode: function () {
    var $dom = $('#identity');
    var val = $dom.val();
    var rs = B.isIdentityCode(val);
    if (rs.status) {
      this.identity = val;
    } else {
      this.identity = null;
    }
    this.toggleSubmitBtn();
  },
  //检查身份证
  checkIdentityCode: function () {
    var $dom = $('#identity');
    var val = $dom.val();
    var rs = B.isIdentityCode(val);
    if (!rs.status) {
      B.topWarn(rs.msg);
    }
  },
  //下一步
  next: function () {
    var that = this;
    $.ajax({
      type: 'put',
      dataType: 'json',
      url: '/_common/acc/reg',
      data: {
        uName: that.number,
        code: that.code,
        cardNo: that.identity
      },
      success: function (data) {
        //console.log(data);
        if (data.status == 0) {
          location.hash = '#step2';
        }else{
          B.topWarn(data.msg);
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        B.topWarn(B.tips.networkError);
      }
    });
  },
  //提交
  submit: function () {
    var that = this;
    $.ajax({
      type: 'put',
      dataType: 'json',
      url: '_common/acc/reg',
      data: {
        uName: that.number,
        code: that.code,
        pwd: that.pwd,
        requestUrl: document.referrer
      },
      success: function (data) {
        if (0 == data.status) {
          location.href = '/login?number=' + that.number;
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
    if (this.number && this.code && this.identity) {
      this.$next.removeClass('btn-disabled');
    } else {
      this.$next.addClass('btn-disabled');
    }

  },
  //hash变化
  hashChange: function () {
    if (location.hash == 'step2') {
      this.$form1.hide();
      this.$form2.show();
    } else {
      this.$form1.show();
      this.$form2.hide();
    }
  },
  event: function () {
    $('#content').on('click', '#btn-code:not(.btn-disabled)', this.getCode.bind(this));
    $('#tel').on('keyup', this.updateNumber.bind(this));
    $('#tel').on('blur', this.checkNumber.bind(this));
    $('#code').on('keyup', this.updateCode.bind(this));
    $('#code').on('blur', this.checkCode.bind(this));
    $('#identity').on('keyup', this.updateIdentityCode.bind(this));
    $('#identity').on('blur', this.checkIdentityCode.bind(this));
    $('#pwd').on('keyup', this.updatePwd.bind(this));
    $('#pwd').on('blur', this.checkPwd.bind(this));
    this.$next.on('click', this.next.bind(this));
    this.$submit.on('click', this.submit.bind(this));
    window.onhashchange = this.hashChange.bind(this);
  }
};