/**
 * @description 首页
 */
var _ = require('lodash');
var model = yog.require('cus/model/index.js');

module.exports = function (req, res, next) {
  var resObj = req.appData;
  var user = req.session.user || {};
  _.extend(resObj.header, {
    leftIcon: 'me',
    leftUrl: false,
    rightIcons: [
      {icon: 'search', url: '/auction/search'},
      {icon: 'msg', url: '/user/sys-message'}
    ]
  });
  resObj.user = user;
  resObj.photo = {
    notEditable: true,
    url: user.imgurl
  }
  res.render('cus/page/index.tpl', resObj);
};