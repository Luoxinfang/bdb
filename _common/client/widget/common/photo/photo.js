/**
 * @description 用户头像
 */
var B = require('_common:js/bdb/core.js');
module.exports = {
  init: function () {
    this.$photo = $('#photo');
    this.events();
  },
  //上传头像
  uploadPhoto: function (e) {
    var that = this;
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      that.$photo.prop('src', this.result);
      that.doUpload({
        name: file.name,
        data: this.result
      });
    };
  },
  //预览头像
  doUpload: function (data) {
    $.ajax({
      type: 'post',
      dataType: 'json',
      url: B.server.file + '/interface/file/baseupload',
      data: data,
      success: function (data) {
        if (0 == data.status) {

        } else {
          B.topWarn(data.msg);
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        B.topWarn(B.tips.networkError);
      }
    });
  },
  events: function () {
    $('.input-file').on('change', this.uploadPhoto.bind(this));
  }
};