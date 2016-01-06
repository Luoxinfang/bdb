/**
 * @description 托管出价
 */
var _ = require('lodash');
var tip = yog.require('_common/lib/tip.js');
var model = yog.require('cus/model/auction/detail.js');

module.exports.post = function (req, res) {
  var param = req.body;
  var user = req.session.user
  if (user) {
    param.token = user.token;
    model.bid(param).then(function (data) {
      res.json(data);
    });
  } else {
    res.json(tip.sessionExpired);
  }
};