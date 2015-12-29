/**
 * @description 拍品出价信息
 */
var _ = require('lodash');
var model = yog.require('cus/model/auction/detail.js');

module.exports.get = function (req, res) {
  var param = _.extend({
    token: req.session.user.token
  }, req.query);
  //这里响应的是页面的片段
  model.getBid(param).then(function (rs) {
    res.render('_common/page/auction/bid-list.tpl', rs);
  });
};
