/**
 * Created by chenzhenhua on 2015/12/8.
 */
module.exports = {
  init: function () {
    this.$dom = $('#quick-pay');
    this.$password = $('.password');
    this.price = $('#price').val();
    this.serialNumber = $('#serial-number').val();

    this.events();
  },
  //以*显示输入的数字
  showInput: function (e) {
    var that = this;
    var val = that.$password.val();
    var pwdLength = val.length;

    this.$dom.find('.word').each(function () {
      $(this).toggleClass('filled', $(this).index() < pwdLength);
    });
    if (pwdLength >= 6) {
      val = val.substring(0, 6);
      that.$password.val(val);
      that.overagePay();
    }
  },
  //下一步
  //余额支付
  overagePay: function (pwd) {
    var that = this;
    $.ajax({
      type: 'post',
      dataType: 'json',
      url: '/_common/cash/quick-pay',
      data: {
        type: 0,//支付保证金
        money: that.price,
        proCode: that.serialNumber,
        payPwd: that.$password.val()
      },
      success: function (data) {
        if (0 == data.status) {
          that.$dom.find('.result-tip').html(data.msg);
          setTimeout(function () {
            location.reload();
          }, 3000);
        } else {
          that.$dom.find('.password').val('');
          that.$dom.find('.word').removeClass('filled');
          that.$dom.find('.result-tip').html(data.msg);
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        that.$dom.find('.password').val('');
        that.$dom.find('.word').removeClass('filled');
        that.$dom.find('.result-tip').html('网络超时，请稍后再试');
      }
    });
  },
  //关闭
  close: function () {
    $('.overlay').hide();
    this.$dom.remove();
  },
  events: function () {
    this.$password.focus();
    this.$password.on('input', this.showInput.bind(this));
    $('.dialog-close').on('click', this.close.bind(this));
  },
};