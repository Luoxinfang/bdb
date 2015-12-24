/**
 * @description 首页
 */
var _ = require('lodash');
var model = yog.require('cus/model/index.js');

module.exports = function (req, res, next) {
  var resObj = req.appData;
  _.extend(resObj.header, {
    leftIcon: 'me',
    leftUrl: false,
    rightIcons: [
      {icon: 'search', url: '/auction/search'},
      {icon: 'msg', url: '/user/sys-message'}
    ]
  });
  resObj.user = req.session.user;
  console.log(resObj.user);
  res.render('cus/page/index.tpl', resObj);
};