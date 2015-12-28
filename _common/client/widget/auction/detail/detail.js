/**
 * @author xf.radish
 * @description 拍品详情
 */
var B = require('_common:js/bdb/core.js');
module.exports = {
  init: function () {
    this.$collect = $('#collect');
    this.$page = $('.auction-detail');
    this.$dialog = $('.auction-dialog');
    this.$countdown = $('#countdown');
    this.id = this.$page.data('auctionId');
    this.getAuctionStatus();
    this.event();
  },
  //更新倒计时
  updateCountdown:function(time){
    var time = B.format
    setInterval(function () {

    },1000);
  },
  //判断拍品的拍卖状态
  getAuctionStatus: function () {
    var startTime = this.$page.data('startTime');
    var endTime = this.$page.data('endTime');
    var saleTime = this.$page.data('saleTime');
    var now = +new Date();
    var shortStatus = '';
    var countdown = 0;//倒计时

    if (now > startTime) {//未开始 || <
      shortStatus = 'wks';
      this.updateCountdown(now - startTime);
    } else if (now > saleTime) {//已结束
      //提示结束
      shortStatus = 'yjs';
      B.alert({
        icon: 'error',
        title: '拍卖已结束',
        content: '3秒后返回首页...',
        callback: function () {
          setTimeout(function () {
            location.href = '/';
          });
        }
      });


    } else {//拍卖中
      shortStatus = 'ppz';

    }
    this.$dialog.addClass(shortStatus);
  },
  //订阅拍品
  subscribe: function () {
    var that = this;
    $.ajax({
      type: 'post',
      dataType: 'json',
      url: '/_common/auction/subscribe',
      data: {
        subFlag: ~~!that.$collect.hasClass('on'),
        proCode: that.id
      },
      success: function (data) {
        if (0 == data.status) {
          $('#collect-num').text(data.number);
        } else {
          B.topWarn(data.msg);
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        B.topWarn(B.tips.networkError);
      }
    });
  },
  event: function () {
    this.$collect.on('click', this.subscribe.bind(this));

  }
};