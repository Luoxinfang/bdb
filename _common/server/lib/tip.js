/**
 * @author chenzhenhua
 * @createTime 2015-12-25
 * @type 根据异常码返回相应错误提示
 */

var _ = require('lodash');

var obj = {
  '60034': {
    type: 'error',
    content: {
      tit: '请先实名认证',
      msg: '3秒后跳转至实名认证页面...'
    },
    btn: {
      href: '/user/check-name',
      txt: '实名认证'
    },
    autoJump: true
  },
  'default': {
    type: 'error',
    content: {
      tit: '服务器异常，请稍后再试',
      msg: '3秒后跳转至首页...'
    },
    autoJump: true
  }
};
module.exports = {
  getTip: function (status) {
    return obj[status] || obj['default'];
  },
  sessionExpired: {
    status: '9010',
    msg: '会话过期，请重新登录'
  }

};
