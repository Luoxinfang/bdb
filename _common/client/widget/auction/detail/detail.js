/**
 * @author xf.radish
 * @description 拍品详情
 */

var B = require('_common:js/bdb/core.js');
var moment = require('_common:js/aid/moment.js');


module.exports = {
  init: function () {
    this.$collect = $('#collect');
    this.$page = $('.auction-detail');
    this.$dialog = $('.auction-dialog');
    this.$countdown = $('#countdown');
    this.$bidList = $('#bid-list');
    this.id = this.$page.data('auctionId');
    this.pageSize = 10;//默认页大小
    this.pageNum = 1;//默认页码
    this.getAuctionStatus();
    this.getBidList('init');

    this.event();
  },
  //绑定出价列表的滑动
  bindScroll: function () {
    var that = this;
    $('.auction-dialog').dropload({
      loadUpFn: function (me) {
        that.getBidList.bind(that)('more',me);
      },
      loadDownFn: function (me) {
        that.getBidList.bind(that)('append',me);
      }
    });
  },
  //获取出价列表
  getBidList: function (type, dropLoad) {
    var that = this;
    $.ajax({
      type: 'get',
      dataType: 'html',
      url: '/_common/auction/bid',
      data: {
        flag: '00',
        page: that.pageNum,
        proCode: that.id,
        pageSize: that.pageSize
      },
      success: function (html) {
        if (dropLoad) {
          dropLoad.resetload();
        }
        if (type === 'append') {
          that.$bidList.append(html);
        } else if (type === 'init') {
          that.$bidList.html(html);
          that.bindScroll.bind(that)();
        }else{
          that.$bidList.html(html);
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        B.topWarn(B.tips.networkError);
      }
    });
  },
  //更新倒计时
  updateCountdown: function (milliseconds) {
    var time = B.milliseconds2time(milliseconds);
    this.$countdown.text(time);
    var runner = setInterval(function () {
      milliseconds -= 1000;
      var time = B.milliseconds2time(milliseconds);
      this.$countdown.text(time);
      if (milliseconds == 0) {
        clearInterval(runner);
        location.reload();
      }
    }.bind(this), 1000);
  },
  //判断拍品的拍卖状态
  getAuctionStatus: function () {
    var startTime = this.$page.data('startTime');
    var endTime = this.$page.data('endTime');
    var saleTime = this.$page.data('saleTime');
    var now = +new Date();
    var shortStatus = '';

    if (now < startTime) {//未开始 || <
      shortStatus = 'wks';
      this.updateCountdown(startTime - now);
    } else if (now > saleTime) {//已结束
      //提示结束
      shortStatus = 'yjs';
      B.alert({
        icon: 'error',
        title: '拍卖已结束',
        content: '3秒后返回首页...',
        callback: function () {
          setTimeout(function () {
            //location.href = '/';
          });
        }
      });
    } else {//拍卖中
      shortStatus = 'ppz';
      $('#time-txt').text('结束时间');
      this.updateCountdown(endTime - now);


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