/**
 * @author radish
 * @description 这个路由处理拍品的订阅
 */
var _ = require('lodash');
var tip = yog.require('_common/lib/tip.js');
var model = require('../../model/auction/subscribe.js');

//订阅商品
module.exports.post = function (req, res, next) {
  var user = req.session.user;
  if (user) {
    var data = req.body;
    data.token = '4addbd89e94d8947a506fe23c61ac613'||user.token;
    model.subscribe(data).then(function (rs) {
      res.json(rs);
    }).catch(function (error) {
      yog.log.fatal(error);
    });
  } else {
    res.json(tip.sessionExpired);
  }
};