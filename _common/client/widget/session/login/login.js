/**
 * @author xf.radish
 * @description 登录组件
 */
var B = require('_common:js/bdb/core.js');
var keyRemember = 'remember_username';//是否记住用户名
module.exports = {
  init: function () {
    if (localStorage[keyRemember] == 1) {
      var user = $.cookie.get('user_info');
      if (user) {
        user = JSON.parse(decodeURIComponent(user));
        $('#username').val(user['username']);
        $('#btn-remember').prop('checked', true);
      }
    } else {
      if (document.referrer.indexOf('/reg') !== -1) {
        $('#username').val(B.getUrlParam('number'));
      } else {
        $('#username').val('');
      }
    }
    this.event();
  },
  //用户登录
  login: function (e) {
    e && e.preventDefault();
    var userName = $('#username').val(),
      password = $('#user-pwd').val(),
      remember = $('#btn-remember').prop('checked'),
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
        uName: userName,
        pwd: password,
        remember: remember
      },
      success: function (data) {
        if (0 == data.status) {
          window.location.replace(data.referrer || '/');
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
  //记住密码
  remember: function () {
    localStorage[keyRemember] = ~~$(this).prop('checked');
    //console.log(localStorage[keyRemember]);
  },
  event: function () {
    $('#btn-login').on('click', this.login.bind(this));
    $('#btn-remember').on('click', this.remember);
  }
};
