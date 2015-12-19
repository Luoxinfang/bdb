/**
 * @author radish
 * @description 这个路由处理注册等
 */
var md5 = require('md5');
var _ = require('lodash');
var model = require('../../model/user.js');

//注册
module.exports.post = function (req, res, next) {
  var param = _.extend({
    requestIP: req.ip,
  }, req.body);
  param.pwd2 = param.pwd = md5(req.body.pwd);
  model.register(param).then(function (data) {
    res.json(data);
  });
};