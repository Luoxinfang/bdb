/**
 * @description init app
 */
(function (doc) {
  var app = {
    init: function () {
      this.maxWidth = 640;
      this.event();
    },
    //设置HTML文档字体 rem根据此设置生效
    setHtmlFontSize: function () {
      var clientWidth = doc.documentElement.clientWidth;
      clientWidth = clientWidth > this.maxWidth ? this.maxWidth : clientWidth;
      if (clientWidth) {
        doc.documentElement.style.fontSize = 1 * (clientWidth / 10) + 'px';
      }

    },
    event: function () {
      doc.addEventListener('DOMContentLoaded', this.setHtmlFontSize.bind(this), false);
    }
  };
  app.init();
})(document);