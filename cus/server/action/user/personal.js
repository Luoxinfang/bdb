/**
 * @author pulang
 * @createTime 2015-12-16
 * @description 这个路由处理个人主页信息的加载
 */

var _ = require('lodash');
var model = yog.require('cus/model/user.js');

module.exports = function (req, res, next) {
  var Promise = yog.Promise;
  var param1 = {
    token: req.session.user.token
  };
  var param2 = _.extend({
    page: 1,
    pageSize: 2
  }, param1);
  Promise.props({
    user: model.getInfo(param1),
    address: model.queryList(param2)
  }).then(function (rs) {
    var resObj = _.extend({
      photo:{
        url: req.session.user.imgurl
      },
      user: rs.user.data,
      address: rs.address.data
    }, req.appData);
    if (resObj.user.othercount) {
      resObj.user.counttype = resObj.user.othercount.substring(0, 2);
    }
    res.render('cus/page/user/personal.tpl', resObj);
  });
};