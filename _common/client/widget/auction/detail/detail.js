/**
 * @author xf.radish
 * @description 拍品详情
 */

var B = require('_common:js/bdb/core.js');
var cash = require('_common:js/bdb/cash.js');
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
    this.startPrice = $('#start-price').data('price');//起拍价
    this.increasePrice = $('#increase-price').data('price');//加价幅度
    this.bailPrcie = $('#bail-price').data('price');//保证金

    this.getAuctionStatus();

    this.event();
  },
  //绑定出价列表的滑动
  bindScroll: function () {
    var that = this;
    $('.auction-dialog').dropload({
      loadUpFn: function (me) {
        that.pageNum = 1;
        that.getBidList.bind(that)('more', me);
      },
      loadDownFn: function (me) {
        that.pageNum = that.pageNum + 1;
        that.getBidList.bind(that)('append', me);
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
        if (type === 'append') {
          that.$bidList.append(html);
          var maxPage = Math.ceil(that.total / that.pageSize);
          if (that.pageNum >= maxPage) {
            dropLoad.lock();
            dropLoad.noData();
          }
        } else {
          that.$bidList.html(html);
          that.total = +that.$bidList.find('.max-price').data('total')
              || that.pageSize;
          var increasePrice = that.increasePrice + $('.max-price').data('maxPrice');
          $('#btn-increase').data('price', increasePrice).text('出价' + increasePrice);
          that.updateCountdown(5 * 60 * 1000, $('#first-price'));
          if (type === 'init') {
            that.bindScroll.bind(that)();
          }
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        B.topWarn(B.tips.networkError);
      },
      complete: function () {
        if (dropLoad) {
          dropLoad.resetload();
        }
      }
    });
  },
  //更新倒计时
  updateCountdown: function (milliseconds, $dom) {
    var ms = milliseconds;
    var time = B.milliseconds2time(ms);
    var $dom = $dom || this.$countdown;
    $dom.text(time);
    var runner = setInterval(function () {
      ms = ms - 1000;
      var time = B.milliseconds2time(ms);
      $dom.text(time);
      if (ms == 0) {
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
      $('#btn-custom,#btn-increase').addClass('btn-disabled');
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
      $('#time-txt').text('结束时间');
      this.updateCountdown(saleTime - now);
      this.getBidList('init');

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
  //缴纳保证金
  contributeBail: function () {
    var that = this;
    cash.showQuickPay({
      title: '交纳保证金',
      price: that.bailPrice,
      serialNumber: that.id
    });
  },
  //显示托管键盘
  showEntrust: function () {
    var that = this;
    B.showKeyboard({
      btnName: '托管',
      callback: function (content) {
        that.postEntrust.bind(this)(content);
      }
    });
  },
  //提交委托出价
  postEntrust: function (price) {
    var that = this;
    $.ajax({
      type: 'post',
      dataType: 'json',
      url: '/auction/entrust',
      data: {
        productCode: that.id,
        maxValue: price
      },
      success: function (data) {
        if (0 == data.status) {
          B.alert({
            icon: 'success',
            title: data.msg,
            callback: function () {
              location.reload();
            }
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
  //出价参与竞拍
  bid: function (price) {
    var that = this;
    $.ajax({
      type: 'post',
      dataType: 'json',
      url: '/auction/bid',
      data: {
        proCode: that.id,
        amount: price
      },
      success: function (data) {
        if (0 == data.status) {
          B.alert({
            icon: 'success',
            title: data.msg,
            callback: function () {
              location.reload();
            }
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
  //显示自定义出价
  showCustomBid: function () {
    var that = this;
    B.showKeyboard({
      btnName: '出价',
      callback: function (content) {
        that.bid.bind(that)(content);
      }
    });
  },
  //直接加价出价
  increaseBid: function (e) {
    this.bid.bind(this)($(e.target).data('price'));
  },
  event: function () {
    this.$collect.on('click', this.subscribe.bind(this));
    $('#btn-bail').on('click', this.contributeBail.bind(this));
    $('#btn-entrust').on('click', this.showEntrust.bind(this));
    $('#btn-increase').on('click', this.increaseBid.bind(this));
    $('#btn-custom').on('click', this.showCustomBid.bind(this));
  }
};