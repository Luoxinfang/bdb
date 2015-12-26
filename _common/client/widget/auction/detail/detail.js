/**
 * @author xf.radish
 * @description 拍品详情
 */
var B = require('_common:js/bdb/core.js');
module.exports = {
  init: function () {
    this.id = $('.auction-detail').data('auctionId');
    this.event();
  },
  //收藏拍品
  collect:function(){
    var that = this;
    $.ajax({
      type: 'post',
      dataType: 'json',
      url: '/_common/auction/',
      data: {
        proCode: that.id
      },
      success: function (data) {
        if (0 == data.status) {

        } else {

        }
      },
      error: function (jqXHR, textStatus, errorThrown) {

      }
    });
  },
  event: function () {
    $('#collect').on('click', this.collect.bind(this));

  }
};
