/**
 * @author pulang
 * @createTime 2015-12-23
 * @description 这个路由处理商家店铺模块
 */

var _ = require('lodash');
var model = require('../../model/store.js');

module.exports.get = function (req, res, next) {
  var resObj = req.appData;
  _.extend(resObj.header, {
    title: '申请开店',
    leftIcon: null
  });
  res.render('bus/page/store/apply.tpl', resObj);
};

module.exports.post = function (req, res, next) {
  var data = req.body;
  data.token = req.session.user.token;
  model.apply(data).then(function (rs) {
    res.json(rs);
  });
};
