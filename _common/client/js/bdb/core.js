/**
 * @description 百多宝基础类库
 *
 */

module.exports = {
  tips: {
    networkError: '网络错误，请稍后再试'
  },
  //服务器配置
  server: {
    file: 'http://file.bdbvip.com:8080'

  },
  /**
   *  页面顶部提示组件
   */
  topTips: function (opt) {
    var $dom = $('#top-tip'), iconName = 'warn';
    if ($dom.length) {
      $dom.show();
    } else {
      var html = [];
      html.push('<div id="top-tip" class="top-tip">');
      html.push('<div class="top-tip-wrapper">')
      html.push('<span class="top-tip-icon"></span>');
      html.push('<span class="top-tip-content"></span>');
      html.push('</div></div>')
      if ($('.header').size()) {
        $('.toolbar').append(html.join(''));
        $('.top-tip').css({
          top: $('.header').height() + 'px'
        });
      } else {
        $('.toolbar').append(html.join(''));
      }
      $dom = $('#top-tip');
    }
    $dom.find('.top-tip-icon')[0].className = 'top-tip-icon ' + iconName;
    $dom.find('.top-tip-content').html(opt.content);
  },
  topWarn: function (content, lasting) {
    this.topTips({
      type: 'warn',
      content: content
    });
    if (!lasting) {
      setTimeout(this.hideTopTips.bind(this), 5000);
    }
  },
  hideTopTips: function () {
    $('#top-tip').hide();
  },
  /**
   *  表单输入值绑定
   */
  bindInput: function () {
    $(document).on('change', '.input-wrap select', function () {
      $(this).parent().find('[data-role="input"]').html($(this).find('option:checked').text());
    });
    $(document).on('input propertychange', '.input-wrap input', function () {
      if ($(this).attr('type') == 'datetime-local') {
        $(this).parent().find('[data-role="input"]').html($(this).val().replace('T', ' '));
      } else {
        $(this).parent().find('[data-role="input"]').html($(this).val());
      }
    });
  },
  /**
   * 弹出提示
   * opts { icon:'图标', title:'标题', content:'内容', time:'停留时间' }
   */
  alert: function (opts) {
    var model = this;
    var conf = {};
    var html = [];
    if ('object' == typeof(opts)) {
      conf = opts;
      conf.time = opts.time || 2000;
    } else {
      conf.title = arguments[0];
      conf.content = arguments[1];
      conf.icon = arguments[2];
      conf.time = arguments[3] || 3000;
      conf.callback = arguments[4];
    }
    html.push('<div class="alert-wrap">');
    html.push('  <div class="alert-mask"></div>')
    html.push('  <div class="alert">');
    if (conf.icon && conf.icon == 'success') {
      html.push('  <span class="icon-200 icon-suc"></span>');
    } else if (conf.icon && conf.icon == 'warn') {
      html.push('  <span class="icon-200 icon-warn"></span>');
    } else if (conf.icon && conf.icon == 'error') {
      html.push('  <span class="icon-200 icon-fail"></span>');
    } else if (conf.icon && conf.icon == 'loading') {
      html.push('  <span class="icon-200 icon-loading"></span>');
    }
    if (conf.title) {
      html.push('  <p class="alert-title">' + conf.title + '</p>');
    }
    if (conf.content) {
      html.push('  <p class="alert-content">' + conf.content + '</p>');
    }
    html.push('  </div>');
    html.push('</div>')
    $('.overlay').append(html.join('')).show();
    if ('number' == typeof(conf.time)) {
      setTimeout(function () {
        model.clearAlert();
        if ('function' == typeof(conf.callback)) {
          conf.callback();
        }
      }, conf.time);
    }
  },
  clearAlert: function () {
    $('.overlay').hide();
    $('.alert-wrap').remove();
  },
  /**
   * 是不是ios设备
   */
  isIOS: function () {
    return navigator.userAgent.indexOf('iPhone') > -1
        || navigator.userAgent.indexOf('iPad') > -1;
  },
  /**
   * 是不是android设备
   */
  isAndroid: function () {
    return navigator.userAgent.indexOf('Android') > -1
        || navigator.userAgent.indexOf('Linux') > -1;
  },
  /**
   *  是不是一个手机号码
   */
  isMobilePhone: function (number) {
    var rs = {status: 0};
    if (number.length === 11) {
      var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
      if (reg.test(number)) {
        rs.status = 1;
      } else {
        rs.msg = '手机号码格式不对';
      }
    } else {
      rs.msg = '手机号码长度不对';
    }
    return rs;
  },
  /**
   *  是不是密码
   */
  isPwd: function (pwd) {
    var rs = {status: 0, msg: ''};
    if (pwd.length >= 6 && pwd.length <= 15) {
      var reg = /[0-9a-z]/i;
      if (reg.test(pwd)) {
        rs.status = 1;
      } else {
        rs.status = 0;
        rs.msg = '密码只能是数字或者字母';
      }
    } else {
      rs.msg = '密码长度为6-15位';
    }
    return rs;
  },
  /**
   * @description 验证身份证
   */
  isIdentityCode: function (val) {
    var rs = {status: 0, msg: ''},
        value = val + "",
        num = value.toUpperCase(), len, reg;
    if (!(/(^\d{17}([0-9]|X)$)/.test(num))) {
      rs.msg = '身份证号码格式错误';
      return rs;
    }
    len = num.length;
    if (len == 18) {
      reg = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
      var arrSplit = num.match(reg);
      var valNum;
      var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
      var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
      var nTemp = 0, i;
      for(i = 0; i < 17; i++) {
        nTemp += num.substr(i, 1) * arrInt[i];
      }
      valNum = arrCh[nTemp % 11];
      if (valNum != num.substr(17, 1)) {
        rs.msg = '身份证号码格式错误';
      } else {
        //验证通过则返回生日和性别
        rs.status = 1;
        rs.birthDay = arrSplit[2] + '-' + arrSplit[3] + '-' + arrSplit[4];
        rs.gender = (+arrSplit[5] % 2) === 1 ? 1 : 0
      }
    }
    return rs;
  },
  /**
   * @description get the param form browser
   * @param {String} key the param your want to get
   * @return {String}
   */
  getUrlParam: function (key) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i"),
        r = window.location.search.substr(1).match(reg);
    if (null != r) return r[2];
    return null;
  },
  //推拉抽屉
  toggleDrawer: function () {
    $('.drawer,.page').addClass('ts8');
    $('body').toggleClass('with-drawer');
    $('.drawer-holder').on('click', function () {
      $('body').removeClass('with-drawer');
    });
    /*    setTimeout(function () {
     $('.drawer,.page').removeClass('ts8');
     }, 800);*/
  },
  //把毫秒转成刻度时间
  milliseconds2time: function (ms) {
    var day = 0;
    var hours = 0;
    var minute = 0;
    var second = 0;
    var string = '';
    second = parseInt(ms / 1000);
    if (second > 59) {
      minute = (second - 60) / 60;
      second = 59;
    }
    string = '00:' + second;
    if (minute > 59) {
      hours = (minute - 60) / 60;
      minute = 59;
      string = minute + ':' + second;
    }
    if (hours > 23) {
      day = (hours - 24) / 24;
      hours = 23;
      string = hours + '时' + minute + '分';
    }
    if (day > 0) {
      day = parseInt(day);
      string = day + '天 ' + hours + '时';
    }
    return string;
  }
};