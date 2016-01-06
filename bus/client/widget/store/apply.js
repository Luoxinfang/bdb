/**
 * @author pulang
 * @createTime 2015-12-23
 * @description 这个路由处理用户申请开店
 */
var B = require('_common:js/bdb/core.js');
module.exports = {
  init: function () {
    this.event();
  },
  //提交申请开店的资料
  applyStore: function () {
    var storeName = $('#store-name').val();
    var cardImg = $('#card-file').data('url');
    var licenseImg = $('#license-file').data('url');
    var kindsCode = [];
    var agree = ~~$('#agree').prop('checked');
    $('.category-list').find('input').each(function () {
      kindsCode.push($(this).val());
    });
    if (storeName.length < 3) {
      B.topWarn('店铺名称需要大于3个字');
      return false;
    }
    if (!cardImg) {
      B.topWarn('请上传身份证');
      return false;
    }
    if (kindsCode.length < 1) {
      B.topWarn('至少需要选择一个主营分类');
      return false;
    }
    if (!agree) {
      B.topWarn('请同意用户协议和免责条款');
      return false;
    }
    $.ajax({
      type: 'post',
      dataType: 'json',
      url: '/store/apply',
      data: {
        shopName: storeName,
        cardImg: cardImg,
        cardImg2: licenseImg,
        kindsCode: kindsCode.join(','),
        agree: agree
      },
      success: function (data) {
        if (0 == data.status) {
        } else {
          var msg = data.msg || '服务器异常，请稍后再试';
          B.topWarn(msg);
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        B.topWarn('服务器异常，请稍后再试');
      }
    });
  },
  //上传文件
  uploadFile: function (e) {
    var $tar = $(e.target);
    var file = e.target.files[0];
    var reader = new FileReader();
    if (file.size > 1024 * 100 * 10) {
      B.topWarn('上传的头像不能超过10M');
      return false;
    }
    reader.readAsDataURL(file);
    reader.onload = function () {
      var rs = B.uploadImage({
        img: this.result
      });
      if (rs.status == 0) {
        var url = rs.path.replace(/\\/g, '/');
        $tar.data('url', url);
        $tar.parent().css('background-image', 'url("' + url + '")');
      } else {
        B.topWarn(rs.msg);
      }
    };
  },
  event: function () {
    $('#card-file,#license-file').on('change', this.uploadFile.bind(this));
    $("#btn-submit").on('click', this.applyStore.bind(this));
  }
};
