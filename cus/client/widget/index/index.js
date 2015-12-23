/**
 * Created by chenzhenhua on 2015/11/30.
 */
var B = require('_common:js/bdb/core.js');
module.exports = {
  init: function () {
    this.event();
  },
  //退出登录
  logout: function () {
    $.ajax({
      type: 'delete',
      dataType: 'json',
      url: '/_common/session',
      success: function (data) {
        if (0 == data.status) {
          location.href = '/login';
        } else {
          B.topWarn('连接服务服务器失败');
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        B.topWarn(textStatus);
      }
    });
  },
  event: function () {
    $('.icon-me').on('click', B.toggleDrawer);
    $('.logout').on('click', this.logout);
  }
};