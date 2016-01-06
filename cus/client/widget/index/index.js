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
  //穿越到卖家版
  crossBus:function(){
    $.ajax({
      type: 'put',
      dataType: 'json',
      url: '/_common/session',
      success: function (data) {
        if (0 == data.status) {
          location.replace('//bus.bdbvip.com:8085');
        } else {
          B.topWarn('穿越失败了，请检查一下您的时光机！');
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
    		B.topWarn(B.tips.networkError);
      }
    });
  },
  event: function () {
    $('.icon-me').on('click', B.toggleDrawer);
    $('.logout').on('click', this.logout);
    $('.cross-bus').on('click', this.crossBus)
  }
};